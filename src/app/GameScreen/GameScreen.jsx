import React from 'react'
import styled from 'styled-components'
import { breakpoints } from '../../shared/variables'
import GSDropableArea from './components/GSDropableArea'
import GSHeader from './components/GSHeader'
import GSPickupCards from './components/GSPickupCards'

const StRoot = styled.div`
  padding: 32px 16px;
  max-width: 1600px;
  margin: auto;

  @media ${breakpoints.md} {
    padding: 72px;
  }
`

const GameScreen = () => {
  return (
    <StRoot>
      <GSHeader />
      <GSPickupCards />
      <GSDropableArea />
    </StRoot>
  )
}

export default React.memo(GameScreen)
