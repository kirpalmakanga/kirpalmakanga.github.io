export function loadImage(src: string) {
    return new Promise<boolean>((resolve, reject) => {
        const img = new Image();

        img.onload = () => resolve(true);

        img.onerror = () => reject();

        img.src = src;
    });
}

export function scrollToId(id: string) {
    const element = document.querySelector(`#${id}`);

    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    } else {
        throw Error(`Element with id "${id}" does not exist`);
    }
}

export async function getJSON(url: string) {
    const response = await fetch('/data.json');

    return await response.json();
}
