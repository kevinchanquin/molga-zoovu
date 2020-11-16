Feature: Game

   Scenario: The user can put the name in and submit it
      Given the user opens the game
      When the user puts their name in
      Then the user goes to the game view

   Scenario: If the user drops the card to the incorrect slot, the time should be increased
      Given the user is on the game view
      When the user drops the card to the incorrect slot
      Then time is increased

   Scenario: The time should stop when all the cards have been placed in the correct order
      Given the user is on the game view
      When the user places all the cards in the correct order
      Then a message with the result should be rendered
      And after 10 seconds, the game should restart