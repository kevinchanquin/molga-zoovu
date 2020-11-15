/* eslint-disable no-undef */
/**
 * Initialize Variables
 */
const { writeFileSync, unlinkSync } = require('fs')
const createTestCafe = require('testcafe')
const {
  AfterAll,
  setDefaultTimeout,
  Before,
  After,
  Status
} = require('cucumber')

// require('dotenv-flow').config()

const {
  addErrorToController
} = require('./errorHandling')

const { free } = require('../controllers/testControllerHolder')

const TIMEOUT = 45000

let isTestCafeError = false
let cafeRunner = null
// const n = 0

// set default time out
setDefaultTimeout(TIMEOUT)
/**
 * createTestFile
 * description
 *    - creates the test file and writes the code for run the test environment
 */
function createTestFile () {
  writeFileSync(
    `test_${process.env.CUCUMBER_SLAVE_ID}.js`,
    'const errorHandling = require("./features/support/core/errorHandling.js");\n' +
      'const {capture} = require("./features/support/controllers/testControllerHolder.js");\n\n' +
      'fixture("fixture")\n' +
      'test\n' +
      `("test_${process.env.CUCUMBER_SLAVE_ID}", capture)`
  )
}

/**
 * runTest
 * description
 *    - runs all the test from step_definitions folder and creates the screenshots for reports
 */
function runTest (browser) {
  createTestCafe('localhost')
    .then(function (tc) {
      cafeRunner = tc
      const runner = tc.createRunner()
      return runner
        .src(`test_${process.env.CUCUMBER_SLAVE_ID}.js`)
        .browsers(browser)
        // .concurrency(4)
        .run({
          selectorTimeout: TIMEOUT,
          assertionTimeout: TIMEOUT,
          pageLoadTimeout: TIMEOUT
        })
        .catch(function (error) {
          console.error(error)
        })
    })
    .then(function (report) {})
}

/**
 * Before
 * description
 *    - create the test environment and runs the test
 */
Before(function () {
  runTest(this.setBrowser())
  createTestFile()
  return this.waitForTestController.then(function (testController) {
    return testController.maximizeWindow()
  })
})

/**
 * After
 * description
 *    - delete the test environment and runs the test
 */
After(function () {
  unlinkSync(`test_${process.env.CUCUMBER_SLAVE_ID}.js`)
  free()
})

/**
 * After
 * description
 *    - If any test fails, generate the reports
 */
After(async function (testCase) {
  const world = this
  if (testCase.result.status === Status.FAILED) {
    isTestCafeError = true
    attachScreenshotToReport = world.attachScreenshotToReport
    addErrorToController()
  }
})

// /**
//  * AfterAll
//  * description
//  *    - If any test fails, generate the reports
//  */

AfterAll(function () {
  let intervalId = null

  function waitForTestCafe () {
    intervalId = setInterval(checkLastResponse, 500)
  }

  function checkLastResponse () {
    if (testController.testRun.lastDriverStatusResponse === 'test-done') {
      clearInterval(intervalId)
      cafeRunner.close()
      process.exit()
    }
  }

  waitForTestCafe()
})

const getIsTestCafeError = () => isTestCafeError
exports.getIsTestCafeError = getIsTestCafeError
