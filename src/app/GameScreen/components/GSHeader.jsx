import React, { useContext } from 'react'
import styled from 'styled-components'
import { breakpoints, colors, transition } from '../../../shared/variables'
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
const STScoreContainer = styled.div`
  display: flex;
  align-items: center;
`
const StScore = styled.span`
  ${transition('color', '3s')};
  ${({ error }) => error && (`
    ${transition('color', '0.2s')};
    color: ${colors.error};
  `)};
`
const StIcon = styled(Icon)`
  color: ${colors.secondary};
  margin-right: 8px;
`

const GSHeader = () => {
  const { name, score, error } = useContext(Context)

  return (
    <StRoot id='game-screen'>
      <StLeft>
        <Typography variant='h1'>Good luck, {startCase(name)}</Typography>
        <Typography color='gray'>Pick up the right cards</Typography>
      </StLeft>
      <StRight>
        <STScoreContainer>
          <StIcon>schedule</StIcon>
          <Typography variant='h2' color='primary'>
            Your score: <StScore error={error}>{score}&nbsp;seconds</StScore>
          </Typography>
        </STScoreContainer>
        <Typography variant='body2' color='gray'>
          The faster the better!
        </Typography>
      </StRight>
    </StRoot>
  )
}

export default React.memo(GSHeader)
