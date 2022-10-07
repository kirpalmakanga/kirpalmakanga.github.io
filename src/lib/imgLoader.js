export default class {
    constructor(options) {
        const defaults = {
            selector: 'img',
            onProgress: null,
            always: null,
            done: null
        };

        this.settings = { ...defaults, ...options };
        this.images = [...document.querySelectorAll(this.settings.selector)];
        this.nbImagesProcessed = 0;
    }

    callback(fn, param1, param2) {
        if (fn === null) return;

        try {
            fn(param1, param2);
        } catch (error) {
            console.error(error);
        }
    }

    watchProgress = (imgObject) => {
        const { settings, images } = this;
        const nbImages = images.length;

        let percentage = 0;

        if (this.nbImagesProcessed === nbImages) {
            this.nbImagesProcessed = 0;
            return;
        }

        this.nbImagesProcessed++;

        percentage = (this.nbImagesProcessed / nbImages) * 100;

        this.callback(settings.onProgress, imgObject, percentage);
    };

    loadImg = async (element) => {
        const { settings, watchProgress } = this;
        const isBackground = element.hasAttribute('data-background-src');
        const src = element.getAttribute(
            isBackground ? 'data-background-src' : 'src'
        );

        const imgObject = {
            element,
            src,
            loaded: true
        };

        try {
            await new Promise((resolve, reject) => {
                const img = new Image();

                img.onload = () => resolve();

                img.onerror = () => reject();

                img.src = src;
            });

            if (isBackground) {
                element.style.backgroundImage = `url(${src})`;
            } else {
                element.setAttribute('src', src);
            }
        } catch (error) {
            imgObject.loaded = false;
        }

        watchProgress(imgObject, settings);

        return imgObject;
    };

    init = async () => {
        const { settings, images, callback, loadImg } = this;

        try {
            const data = await Promise.all(images.map(loadImg));
            callback(settings.done, data);
        } catch (data) {
            callback(settings.always, data);
        }
    };
}
