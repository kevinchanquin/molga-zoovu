import React, { useContext } from 'react'
import styled from 'styled-components'
import { breakpoints, colors } from '../../../shared/variables'
import { Icon, Typography } from '../../../components'
import Context from '../../../context'
import startCase from 'lodash/startCase'

const StRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 48px;

  @media ${breakpoints.md} {
    flex-direction: row;
    margin-bottom: 80px;
  }
`
const StLeft = styled.span`
  margin-bottom: 32px;

  @media ${breakpoints.md} {
    margin-bottom: 0;
  }

  & > :first-child {
    margin-bottom: 16px;

    @media ${breakpoints.md} {
      margin-bottom: 40px;
    }
  }
`
const StRight = styled.span`
  @media ${breakpoints.md} {
    text-align: right;
  }

  & > :first-child {
    margin-bottom: 16px;

    @media ${breakpoints.md} {
      margin-bottom: 40px;
    }
  }
`
const STScore = styled.div`
  display: flex;
  align-items: center;
`
const StIcon = styled(Icon)`
  color: ${colors.secondary};
  margin-right: 8px;
`

const GSHeader = () => {
  const { name, score } = useContext(Context)

  return (
    <StRoot id='game-screen'>
      <StLeft>
        <Typography variant='h1'>Good luck, {startCase(name)}</Typography>
        <Typography color='gray'>Pick up the right cards</Typography>
      </StLeft>
      <StRight>
        <STScore>
          <StIcon>schedule</StIcon>
          <Typography variant='h2' color='primary'>
            Your score: {score} seconds
          </Typography>
        </STScore>
        <Typography variant='body2' color='gray'>
          The faster teh better!
        </Typography>
      </StRight>
    </StRoot>
  )
}

export default React.memo(GSHeader)
