import React, { useContext } from 'react'
import Context from '../../context'

import GameScreen from '../GameScreen'
import WelcomeScreen from '../WelcomeScreen'

const ViewHandler = () => {
  const { user } = useContext(Context)

  if (!user.name) return <WelcomeScreen />
  return <GameScreen />
}

export default ViewHandler
