import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Button, Icon, Typography } from '../../components'
import Context from '../../context'

let resetTimeout = null

const StRoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 64px 16px;
  min-height: 100%;
`
const StContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StButton = styled(Button)`
  margin-top: 48px;
`

const ResultScreen = () => {
  const { name, score, resetGame } = useContext(Context)

  useEffect(() => {
    resetTimeout = setTimeout(resetGame, 10000)
  }, [resetGame])

  const onRestartNow = () => {
    clearTimeout(resetTimeout)
    resetGame()
  }

  return (
    <StRoot id='result-screen'>
      <StContainer>
        <Typography color='gray' variant='h2'>
          Good job, {name}!
        </Typography>
        <Typography color='primary' variant='h1' style={{ margin: '48px 0' }}>
          Your score was: {score}&nbsp;seconds
        </Typography>
        <Typography color='gray' variant='body2'>
          Restarting in 10&nbsp;seconds...
        </Typography>
        <StButton onClick={onRestartNow}>
          Restart now <Icon>autorenew</Icon>
        </StButton>
      </StContainer>
    </StRoot>
  )
}

export default ResultScreen
