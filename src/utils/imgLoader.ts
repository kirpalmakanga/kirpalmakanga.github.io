function loadImage(src: string) {
    return new Promise<boolean>((resolve, reject) => {
        const img = new Image();

        img.onload = () => resolve(true);

        img.onerror = () => reject();

        img.src = src;
    });
}

interface PreloadedImage {
    element: Element;
    src: string;
    loaded: boolean;
}

interface Options {
    selector: string;
    onProgress?: (image: PreloadedImage, percentage: number) => void;
    always?: (data: PreloadedImage[]) => void;
    done?: (data: PreloadedImage[]) => void;
}

export default class {
    settings: Options = {
        selector: 'img',
    };

    elements: Element[] = [];

    processedImagesCount: number = 0;

    constructor(options: Options) {
        const { settings, elements } = this;
        Object.assign(settings, options);

        elements.push(...document.querySelectorAll(settings.selector));
    }

    watchProgress = (imgObject) => {
        const {
            settings: { onProgress },
            elements,
        } = this;
        const nbImages = elements.length;

        let percentage = 0;

        if (this.processedImagesCount === nbImages) {
            this.processedImagesCount = 0;
        } else {
            this.processedImagesCount++;

            percentage = (this.processedImagesCount / nbImages) * 100;

            if (typeof onProgress === 'function')
                onProgress(imgObject, percentage);
        }
    };

    loadImg = async (element) => {
        const { watchProgress } = this;
        const isBackground = element.hasAttribute('data-background-src');
        const src = element.getAttribute(
            isBackground ? 'data-background-src' : 'src'
        );

        const imgObject = {
            element,
            src,
            loaded: true,
        };

        try {
            await loadImage(src);

            if (isBackground) {
                element.style.backgroundImage = `url(${src})`;
            } else {
                element.setAttribute('src', src);
            }
        } catch (error) {
            imgObject.loaded = false;
        }

        watchProgress(imgObject);

        return imgObject;
    };

    init = async () => {
        const {
            settings: { done, always },
            elements,
            loadImg,
        } = this;

        try {
            const data = await Promise.all(elements.map(loadImg));

            if (typeof done === 'function') done(data);
        } catch (data) {
            if (typeof always === 'function') always(data);
        }
    };
}
