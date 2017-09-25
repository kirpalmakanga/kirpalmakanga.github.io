// jshint esversion: 6, asi:true
// eslint-env es6

import '../styles/main.scss'
import imgLoader from './lib/imgLoader'
import loadFonts from './lib/loadFonts'
import scrollTo from './lib/scrollTo'
import Cookies from 'js-cookie'

(() => {
    const { body } = document

    const fontsLoaded = Cookies.get('fontsLoaded')
    const intro = document.querySelector('.intro')
    const logo = document.querySelector('.logo')

    const portfolio = document.querySelector('.portfolio')
    const portfolioButton = document.querySelector('.open-portfolio')

    const contact = document.querySelector('.contact')
    const openContactButton = document.querySelector('.open-contact')
    const closeContactButton = document.querySelector('.close-contact')

    const imageLoader = new imgLoader({
      selector: '.preload',
      onProgress: (img) => img.element.classList.add('loaded')
    })

    const fonts = [
      'jaapokki-regular.eot',
      'jaapokki-regular.ttf',
      'jaapokki-regular.woff',
      'jaapokki-regular.woff2',
      'kontanter.eot',
      'kontanter.ttf',
      'kontanter.woff',
      'kontanter.woff2'
    ].map((f) => `${window.location.href}/dist/static/${f}`)

    imageLoader.init()

    if(fontsLoaded) {
      intro.classList.add('loaded')
    } else {
      loadFonts(fonts, () => {
          intro.classList.add('loaded')
          Cookies.set('fontsLoaded', 'true')
      })
    }

    portfolioButton.addEventListener('click', () => scrollToY(portfolio.offsetTop, 500, 'easeInOutSine'))

    openContactButton.addEventListener('click', () => contact.classList.add('contact--show'))

    closeContactButton.addEventListener('click', () => contact.classList.remove('contact--show'))
})()
