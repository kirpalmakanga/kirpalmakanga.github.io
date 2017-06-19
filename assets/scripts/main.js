// jshint esversion: 6, asi:true
// eslint-env es6

window.requestAnimFrame = (() => {
  const fallback = callback => window.setTimeout(callback, 1000 / 60)

  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    fallback
  )
})()

function scrollToY(scrollTargetY = 0, speed = 2000, easing = 'easeOutSine') {
    const scrollY = window.scrollY
    const time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));
    const easingEquations = {
        easeOutSine: pos => {
            return Math.sin(pos * (Math.PI / 2))
        },
        easeInOutSine: pos => {
            return (-0.5 * (Math.cos(Math.PI * pos) - 1))
        },
        easeInOutQuint: pos => {
            if ((pos /= 0.5) < 1) {
                return 0.5 * Math.pow(pos, 5)
            }
            return 0.5 * (Math.pow((pos - 2), 5) + 2)
        }
    }

    let currentTime = 0

    // add animation loop
    function tick() {
        let p, t
        currentTime += 1 / 60

        p = currentTime / time
        t = easingEquations[easing](p)

        if (p < 1) {
            requestAnimFrame(tick)

            window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t))
        } else {
            console.log('scroll done')
            window.scrollTo(0, scrollTargetY)
        }
    }

    tick()
}

function loadFonts(array, callback) {
    const progressMax = array.length
    let progress = 0

    const showProgress = (step, total) => {
        if (step === total) {
            callback()
        }
    }

    array.map(url => {
        fetch(url)
        .then(response => {
            console.log(response)
            progress = progress + 1

            showProgress(progress, progressMax)
        })
        .catch(error => console.error(error))
    })
}

(() => {
    'use strict'

    const body = document.querySelector('body')

    const fontsLoaded = Cookies.get('fontsLoaded')
    const intro = document.querySelector('.intro')
    const logo = document.querySelector('.logo')

    const fonts = [
      'jaapokki-regular.eot',
      'jaapokki-regular.ttf',
      'jaapokki-regular.woff',
      'jaapokki-regular.woff2',
      'kontanter.eot',
      'kontanter.ttf',
      'kontanter.woff',
      'kontanter.woff2'
    ].map(file => window.location.href + '/dist/fonts/' + file)

    document.imgWatcher({
      selector: '.preload',

      progress: (img) => {
        img.element.classList.add('loaded')
      }
    })

    if(fontsLoaded) {
      intro.classList.add('loaded')
    } else {
      loadFonts(fonts, () => {
          intro.classList.add('loaded')
          Cookies.set('fontsLoaded', 'true')
      })
    }

    document.querySelector('.open-portfolio').addEventListener('click', () => {
      scrollToY(document.querySelector('.portfolio').offsetTop, 1000, 'easeInOutSine')
    })

    document.querySelector('.open-contact').addEventListener('click', () => {
      const closeContact = ({ target }) => {
        body.classList.remove('show-contact')
        target.removeEventListener('click', closeContact)
      }
      body.classList.add('show-contact')
      document.querySelector('.close-contact').addEventListener('click', closeContact)
    })
})()
