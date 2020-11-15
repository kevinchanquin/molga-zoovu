import React, { useContext } from 'react'
import Context from '../../context'

const GameScreen = () => {
  const { user: { name } } = useContext(Context)
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(GameScreen)
