# Make our logo great again | A Zoovu Challenge

Hey there! I'm Kevin Chanquín, hope you enjoy the game :)

## Get started

### How to play

Go to `game` and open `i-want-to-play-a-game.html` in your prefered browser.

### Run the app in development mode

In the project directory, run:

`yarn install`

and then:

`yarn start`

### Run the tests

Make sure the app is running:

`yarn start`

and then, run:

`yarn test`

## Technical solution

This game was developed with React.js, using Context to handle the base logic of the game. See: `src/context/index.jsx`.

The game view is divided into 3 screens: The `WelcomeScreen`, the `GameScreen` and the `ResultScreen`. All managed by a simple handler component:

```jsx
const ScreenHandler = () => {
  const { name, gameOver } = useContext(Context)

  if (!name) return <WelcomeScreen />
  if (gameOver) return <ResultScreen />
  return <GameScreen />
}
```

### The looks

In order to make the fancy looks of the game I used `styled-components`, this library is perfect to give elements a different style based on props.

I also made some reusable components: Button, Typography, Textfield and Icon, both to demonstrate the use of styled-components and prop-types. See: `src/components`.

E.g.
```jsx
const StH1 = styled.h1`
  color: ${({ color }) => colors[color]};
  margin: 0;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.01em;
`
```

### The gameplay

The brains behind the drag and drop is `react-dnd` and it's `html-5-backend` which uses the HTML5 drag and drop API, and allows you to keep your components decoupled.

You can see my implementation of it in `src/app/GameScreen/components/DropArea.jsx` and `src/app/GameScreen/components/LogoCard.jsx`.

E.g.
```jsx
const [{ isOverItem }, drop] = useDrop({
  accept: ItemTypes.CARD,
  drop: (item) => handleDrop({ id, expected, dropped }, item),
  canDrop: ({ source }, monitor) => (
    source === 'droppableArea' || (source === 'pickupArea' && !dropped)
  ),
  collect: (monitor) => ({
    isOverItem: monitor.isOver() ? monitor.getItem() : null
  })
})
```

In addition to that, most of what happens when a card is dragged is handled in `GameScreen.jsx`, using `lodash` to map the arrays of cards and drop areas, as well as using some hooks to handle the callbacks and state updates.

### The testing

In order to make sure there's no pesky bugs in this fancy game I implemented some End-to-End testing, using `cucumber.js` and `TestCafe`. It runs some basic scenarios like making sure the game starts after submitting a name, time increases when placing a card in the wrong spot, etc.

Check them at: `features/scenarios/Game.feature` and `features/step_definitions/game.js`.

E.g.
```feature
Scenario: The time should stop when all the cards have been placed in the correct order
  Given the user is on the game view
  When the user places all the cards in the correct order
  Then a message with the result should be rendered
  And after 10 seconds, the game should restart
```

### TL;DR

- `Context` for state management
- `styled-components` for styles
- `react-dnd` for drag and drop
- `cucumber.js` for test definitions
- `TestCafe` for E2E testing
