import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import LogoCard from '../components/LogoCard'
import { map } from 'lodash'
import Context from '../../../context'
import { breakpoints } from '../../../shared/variables'

const StRoot = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;

  @media ${breakpoints.md} {
    margin-bottom: 80px;
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
const StPlaceholder = styled.div`
  position: relative;
  &::before {
    content: '';
    display: block;
    margin-top: 100%;
  }
`

const GSPickupCards = ({ data }) => {
  const { startGame } = useContext(Context)

  return (
    <StRoot>
      {map(data, ({ id, variant }, i) => (
        id && variant
          ? <LogoCard
              key={id}
              id={id}
              variant={variant}
              onBegin={startGame}
              source='pickupArea'
            />
          : <StPlaceholder key={i} />
      ))}
    </StRoot>
  )
}

GSPickupCards.propTypes = {
  data: PropTypes.array
}

GSPickupCards.defaultProps = {
  data: []
}

export default React.memo(GSPickupCards)
