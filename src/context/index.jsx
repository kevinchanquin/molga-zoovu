import React, { Component } from 'react'

const Context = React.createContext()

export class ContextProvider extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: 'Di',
      score: 0,
      gameOver: false
    }
  }

  setName = (name) => {
    this.setState({ name })
  }

  render () {
    return (
      <Context.Provider value={{
        ...this.state,
        setName: this.setName
      }}
      >
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default Context
