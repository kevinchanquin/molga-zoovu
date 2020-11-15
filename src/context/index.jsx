import React, { Component } from 'react'

const Context = React.createContext()

export class ContextProvider extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: null
    }
  }

  setName = (name) => {
    this.setState({ name })
  }

  render () {
    return (
      <Context.Provider value={{
        user: { name: this.state.name, setName: this.setName }
      }}
      >
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default Context
