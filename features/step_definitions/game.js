/* global testController */
const { Given, When, Then } = require('cucumber')

const wellcomeScreen = require('../support/pages/WelcomeScreen')
const gameScreen = require('../support/pages/GameScreen')

// Scenario 1

Given('the user opens the game', async () => {
  await testController
    .navigateTo('http://localhost:3000')
})

When('the user puts their name in', async () => {
  await testController
    .click(wellcomeScreen.nameField())
    .typeText(
      wellcomeScreen.nameField(),
      'Player 1'
    )
    .click(wellcomeScreen.submitButton())
})

Then('the user goes to the game view', async () => {
  await testController
    .expect(gameScreen.view().exists)
    .ok()
})

// Scenario 2

Given('the user is on the game view', async () => {
  await testController
    .navigateTo('http://localhost:3000')
    .click(wellcomeScreen.nameField())
    .typeText(
      wellcomeScreen.nameField(),
      'Player 1'
    )
    .click(wellcomeScreen.submitButton())
})

When('the user drops the card to the incorrect slot', async () => {
  await testController
    .dragToElement(gameScreen.card('z'), gameScreen.dropArea().nth(2))
})

Then('time is increased', async () => {
  const score = await gameScreen.score().getAttribute('data-score')
  await testController
    .expect(parseFloat(score) > 9)
    .ok()
})

// Scenario 3

When('the user places all the cards in the correct order', async () => {
  await testController
    .dragToElement(gameScreen.card('z'), gameScreen.dropArea().nth(0))
    .dragToElement(gameScreen.card('o').nth(0), gameScreen.dropArea().nth(1))
    .dragToElement(gameScreen.card('o').nth(0), gameScreen.dropArea().nth(2))
    .dragToElement(gameScreen.card('v'), gameScreen.dropArea().nth(3))
    .dragToElement(gameScreen.card('u'), gameScreen.dropArea().nth(4))
})

Then('a message with the result should be rendered', async () => {
  await testController
    .expect(gameScreen.resultScreen().exists)
    .ok()
})

Then('after 10 seconds, the game should restart', async () => {
  await testController
    .wait(10000)
    .expect(gameScreen.view().exists)
    .ok()
})
