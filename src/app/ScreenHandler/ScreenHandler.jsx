import React, { useContext } from 'react'
import Context from '../../context'

import WelcomeScreen from '../WelcomeScreen'
import GameScreen from '../GameScreen'
import ResultScreen from '../ResultScreen'

const ScreenHandler = () => {
  const { name, gameOver } = useContext(Context)

  if (!name) return <WelcomeScreen />
  if (gameOver) return <ResultScreen />
  return <GameScreen />
}

export default ScreenHandler
