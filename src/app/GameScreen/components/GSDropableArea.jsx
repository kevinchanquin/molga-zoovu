import React from 'react'
import styled from 'styled-components'
import { Typography } from '../../../components'
import { breakpoints } from '../../../shared/variables'
import DropArea from './DropArea'

const StRoot = styled.div`
  user-select: none;
`
const StArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 48px;

  @media ${breakpoints.md} {
    margin-top: 64px;
  }

  & > * {
    width: calc(20% - 8px);

    @media ${breakpoints.sm} {
      width: calc(20% - 20px);
    }
  }
`
const StSpan = styled.span`
  opacity: 0.6;
`

const GSDropableArea = () => {
  return (
    <StRoot>
      <Typography color='gray'>...and drop them here to make the logo great <StSpan>again!</StSpan></Typography>
      <StArea>
        <DropArea />
        <DropArea />
        <DropArea />
        <DropArea />
        <DropArea />
      </StArea>
    </StRoot>
  )
}

export default GSDropableArea
