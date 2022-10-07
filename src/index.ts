import './styles/main.scss';
import imgLoader from './lib/imgLoader';
import loadFonts from './lib/loadFonts';
import scrollTo from './lib/scrollTo';
import Cookies from 'js-cookie';

(async () => {
    const fontsLoaded = Cookies.get('fontsLoaded');
    const intro = document.querySelector('.intro');

    const portfolio: HTMLButtonElement | null =
        document.querySelector('.portfolio');
    const portfolioButton = document.querySelector('.open-portfolio');

    const contact = document.querySelector('.contact');
    const openContactButton = document.querySelector('.open-contact');
    const closeContactButton = document.querySelector('.close-contact');

    const imageLoader = new imgLoader({
        selector: '.preload',
        onProgress: (img) => img.element.classList.add('loaded')
    });

    const fonts = ['jaapokki-regular.woff2', 'kontanter.woff2'].map(
        (f) => `/fonts/${f}`
    );

    portfolioButton?.addEventListener('click', () =>
        scrollTo(portfolio?.offsetTop, 800, 'easeInOutSine')
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

        intro?.classList.add('loaded');

        Cookies.set('fontsLoaded', 'true');
    }
})();
