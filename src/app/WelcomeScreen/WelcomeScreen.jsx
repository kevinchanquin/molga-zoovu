import React, { useContext } from 'react'
import { TextField, Typography, Button, Icon } from '../../components'
import Context from '../../context'
import styled from 'styled-components'

const StRoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 64px 16px;
  min-height: 100%;
`
const StTextField = styled(TextField)`
  margin: 64px 0;
`

const StForm = styled.form`
  width: 100%;
  max-width: 632px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const WelcomeScreen = () => {
  const { setName } = useContext(Context)

  const handleSubmit = (e) => {
    e.preventDefault()
    setName(e.target.name.value)
  }

  return (
    <StRoot id='welcome-screen'>
      <StForm onSubmit={handleSubmit} autoComplete='off'>
        <Typography variant='h1'>Hello friend, tell me your name...</Typography>
        <StTextField
          name='name'
          placeholder='Your name here'
          required
        />
        <Button data-role='submit'>Lets go <Icon>arrow_right_alt</Icon></Button>
      </StForm>
    </StRoot>
  )
}

export default React.memo(WelcomeScreen)
