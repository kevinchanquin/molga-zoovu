import React from 'react'
import styled from 'styled-components'
import { breakpoints } from '../../../shared/variables'
import LogoCard from './LogoCard'

const StRoot = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 96px;

  @media ${breakpoints.sm} {
    margin-bottom: 192px;
  }

  & > * {
    width: calc(20% - 8px);

    @media ${breakpoints.sm} {
      width: calc(20% - 20px);
    }
  }
`

const GSCards = () => {
  return (
    <StRoot>
      <LogoCard variant='o' />
      <LogoCard variant='z' />
      <LogoCard variant='v' />
      <LogoCard variant='u' />
      <LogoCard variant='o' />
    </StRoot>
  )
}

export default React.memo(GSCards)
