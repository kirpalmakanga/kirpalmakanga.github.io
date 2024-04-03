import './styles/main.scss';
import ImgLoader from './utils/imgLoader';
import loadFonts from './utils/loadFonts';
import cookies from 'js-cookie';

(async () => {
    const fontsLoaded = cookies.get('fontsLoaded');
    const intro = document.querySelector('.intro');

    const portfolio = document.querySelector('.portfolio');
    const portfolioButton = document.querySelector('.open-portfolio');

    const contact = document.querySelector('.contact');
    const openContactButton = document.querySelector('.open-contact');
    const closeContactButton = document.querySelector('.close-contact');

    const imageLoader = new ImgLoader({
        selector: '.preload',
        onProgress: ({ element }) => element.classList.add('loaded'),
    });

    const fonts = ['jaapokki-regular.woff2', 'kontanter.woff2'];

    portfolioButton?.addEventListener('click', () =>
        portfolio?.scrollIntoView({ behavior: 'smooth' })
    );

    openContactButton?.addEventListener('click', () =>
        contact?.classList.add('contact--show')
    );

    closeContactButton?.addEventListener('click', () =>
        contact?.classList.remove('contact--show')
    );

    imageLoader.init();

    if (fontsLoaded) {
        intro?.classList.add('loaded');
    } else {
        await loadFonts(fonts);

        // await new Promise((resolve) => setTimeout(resolve, 5000));

        intro?.classList.add('loaded');

        // cookies.set('fontsLoaded', 'true');
    }
})();
