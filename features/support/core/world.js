/* eslint-disable no-undef */
const { setWorldConstructor } = require('cucumber')
require('dotenv-flow').config()

const testControllerHolder = require('../controllers/testControllerHolder')
const args = {}

function setArgs (parameters) {
  args.browser = parameters.browser
    ? parameters.browser
    : process.env.BROWSER
}
// set cucumber and testcafe environments
setWorldConstructor(function ({ attach, parameters }) {
  // set arguments
  setArgs(parameters)

  this.waitForTestController = testControllerHolder
    .get()
    .then(tc => (testController = tc))

  this.attach = attach

  this.setBrowser = function () {
    if (parameters.browser === undefined) return 'chrome'
    return parameters.browser
  }
})

module.exports = args
