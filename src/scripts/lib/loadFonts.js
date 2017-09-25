export default function loadFonts(array, callback) {
    const progressMax = array.length
    let progress = 0

    const showProgress = (step, total) => {
        if (step === total) {
            callback()
        }
    }

    array.map(async (url) => {
      try {
        const response = await fetch(url)
        progress = progress + 1

        showProgress(progress, progressMax)
      } catch (e) {
          console.error(e)
      }
    })
}
