const { select } = require('../utils')

module.exports = {
  nameField: () => (
    select('input')
      .withAttribute('name', 'name')
  ),
  submitButton: () => (
    select('button')
      .withAttribute('data-role', 'submit')
  )
}
