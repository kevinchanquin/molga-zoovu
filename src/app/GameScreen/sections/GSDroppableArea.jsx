import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Typography } from '../../../components'
import { breakpoints } from '../../../shared/variables'
import DropArea from '../components/DropArea'
import { map } from 'lodash'
import LogoCard from '../components/LogoCard'

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
    width: 100%;
    margin-right: 16px;

    @media ${breakpoints.md} {
      margin-right: 32px;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }
`
const StSpan = styled.span`
  opacity: 0.6;
`

const GSDroppableArea = ({ data, handleDrop }) => {
  return (
    <StRoot>
      <Typography color='gray'>...and drop them here to make the logo great <StSpan>again!</StSpan></Typography>
      <StArea>
        {map(data, ({ id, expected, dropped }, index) => (
          <DropArea
            key={id}
            id={id}
            handleDrop={handleDrop}
            dropped={dropped}
            expected={expected}
            index={index}
          >
            {dropped && (
              <LogoCard
                id={dropped.id}
                variant={dropped.variant}
                hasError={expected !== dropped.variant}
                source='droppableArea'
                index={index}
              />
            )}
          </DropArea>
        ))}
      </StArea>
    </StRoot>
  )
}

GSDroppableArea.propTypes = {
  data: PropTypes.array
}

GSDroppableArea.defaultProps = {
  data: []
}

export default React.memo(GSDroppableArea)
