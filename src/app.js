import webfontloader from 'webfontloader'
import shuffle from './shuffle'

webfontloader.load({google: {families: ['Orbitron:900']}, active: main})

/**
 * Main function - This is where the suggestions are built
 * @return {undefined}
 */
function main() {
  const suggestionsCount = 1
  const suggestions = document.querySelector('.suggestions')
  const uniqueWords = [
    ...new Set([
      ...require('./words/80s.json'),
      ...require('./words/slang.json'),
      ...require('./words/synthwave.json')
    ])
  ]
  const numbers = [...Array(uniqueWords.length).keys()]
  const names = []
  ;[...Array(suggestionsCount).keys()].map(idx => {
    const el = document.createElement('li')
    const indexes = shuffle(numbers).slice(0, 2)

    el.className = `suggestions__suggestion suggestions__suggestion--${idx}`
    suggestions.appendChild(el)
    names.push(`${uniqueWords[indexes[0]]} ${uniqueWords[indexes[1]]}`)
  })

  names.map((name, idx) => {
    const el = document.querySelector(
      `.suggestions__suggestion.suggestions__suggestion--${idx}`
    )

    el.innerText = name
    el.style.height = window.getComputedStyle(el, null)['width']
  })
}
