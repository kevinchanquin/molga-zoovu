import React, { Component } from 'react'

const Context = React.createContext()

let gameInterval = null
let errorTimeout = null

export class ContextProvider extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      score: 0,
      error: false,
      gameOver: false
    }
  }

  setName = (name) => {
    this.setState({ name })
  }

  startGame = () => {
    clearInterval(gameInterval)
    gameInterval = setInterval(() => {
      this.setState(({ score }) => ({ score: score + 1 }))
    }, 1000)
  }

  endGame = () => {
    clearInterval(gameInterval)
    this.setState({ gameOver: true })
  }

  onError = () => {
    clearTimeout(errorTimeout)
    this.setState(({ score }) => ({ score: score + 10, error: true }), () => {
      errorTimeout = setTimeout(() => {
        this.setState({ error: false })
      }, 500)
    })
  }

  resetGame = () => {
    this.setState({ score: 0, gameOver: false })
  }

  render () {
    return (
      <Context.Provider value={{
        ...this.state,
        setName: this.setName,
        resetGame: this.resetGame,
        startGame: this.startGame,
        onError: this.onError,
        endGame: this.endGame
      }}
      >
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default Context
