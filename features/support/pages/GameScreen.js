const { select } = require('../utils')

module.exports = {
  view: () => (
    select('#game-screen')
  ),
  card: (variant) => (
    select('div')
      .withAttribute('data-variant', variant)
  ),
  dropArea: () => (
    select('div')
      .withAttribute('data-role', 'drop-area')
  ),
  score: () => (
    select('span')
      .withAttribute('data-score')
  ),
  resultScreen: () => (
    select('#result-screen')
  )
}
