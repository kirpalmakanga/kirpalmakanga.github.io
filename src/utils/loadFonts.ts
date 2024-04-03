export default async (fonts: string[]) => {
    try {
        return await Promise.all(fonts.map((f) => fetch(`/fonts/${f}`)));
    } catch (e) {
        console.error(e);
    }
};
