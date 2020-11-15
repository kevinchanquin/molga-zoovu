/* eslint-disable no-undef */
const { Selector } = require('testcafe')

exports.select = (selector) => (
  Selector(selector).with({ boundTestRun: testController })
)
