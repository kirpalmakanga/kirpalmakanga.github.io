export function loadImage(src: string) {
    return new Promise<boolean>((resolve, reject) => {
        const img = new Image();

        img.onload = () => resolve(true);

        img.onerror = () => reject();

        img.src = src;
    });
}
