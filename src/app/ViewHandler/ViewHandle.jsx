import React, { useContext } from 'react'
import Context from '../../context'

import GameScreen from '../GameScreen'
import WelcomeScreen from '../WelcomeScreen'

const ViewHandler = () => {
  const { name } = useContext(Context)

  if (!name) return <WelcomeScreen />
  return <GameScreen />
}

export default ViewHandler
