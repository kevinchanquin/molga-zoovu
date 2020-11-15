/* global testController */
const { Given, When, Then } = require('cucumber')

const wellcomeScreen = require('../support/pages/WelcomeScreen')
const gameScreen = require('../support/pages/GameScreen')

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

Then('the user goes to the Game View', async () => {
  await testController
    .expect(gameScreen.view().exists)
    .ok()
})
