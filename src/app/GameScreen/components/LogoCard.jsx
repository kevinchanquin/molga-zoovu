import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useDrag } from 'react-dnd'
import { breakpoints, colors, transition } from '../../../shared/variables'
import { ItemTypes } from '../constants'

import ImgZ from '../../../images/zoovu-z.svg'
import ImgO from '../../../images/zoovu-o.svg'
import ImgV from '../../../images/zoovu-v.svg'
import ImgU from '../../../images/zoovu-u.svg'

const variantMapping = {
  z: ImgZ,
  o: ImgO,
  v: ImgV,
  u: ImgU
}

const StCard = styled.div`
  background: ${colors.white};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05), 0px 3px 4px rgba(0, 0, 0, 0.03), 0px 1px 5px rgba(0, 0, 0, 0.03);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  cursor: grab;
  border: 1px solid transparent;
  ${({ hasError }) => hasError && (`
    border: 2px solid ${colors.error};
  `)};
  opacity: ${({ isDragging }) => isDragging ? 0 : 1};
  ${transition('border-color', '0.5s')};

  @media ${breakpoints.sm} {
    border-radius: 16px;
  }

  &::before {
    content: '';
    display: block;
    margin-top: 100%;
  }
`

const StImg = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: calc(100% - 64px);
  min-width: 20px;
  pointer-events: none;
  user-select: none;
  height: auto;

  @media ${breakpoints.sm} {
    min-width: 48px;
    max-height: 85%;
  }

  @media ${breakpoints.md} {
    min-width: 64px;
    width: calc(100% - 128px);
  }
`

const LogoCard = ({ variant, id, hasError, onBegin, source, ...props }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, id, variant, source },
    begin: onBegin,
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  })

  return (
    <StCard
      data-variant={variant}
      ref={drag}
      hasError={hasError}
      isDragging={isDragging}
      {...props}
    >
      <StImg src={variantMapping[variant]} alt={variant} />
    </StCard>
  )
}

LogoCard.propTypes = {
  variant: PropTypes.oneOf(['z', 'o', 'v', 'u']),
  id: PropTypes.string,
  hasError: PropTypes.bool,
  onBegin: PropTypes.func
}

LogoCard.defaultProps = {
  variant: 'z',
  id: undefined,
  hasError: false,
  onBegin: () => {}
}

export default React.memo(LogoCard)
