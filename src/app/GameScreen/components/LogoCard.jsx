import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { breakpoints, colors } from '../../../shared/variables'

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

const LogoCard = ({ variant, ...props }) => {
  return (
    <StCard data-variant={variant} {...props}>
      <StImg src={variantMapping[variant]} alt={variant} />
    </StCard>
  )
}

LogoCard.propTypes = {
  variant: PropTypes.oneOf(['z', 'o', 'v', 'u'])
}

LogoCard.defaultProps = {
  variant: 'z'
}

export default LogoCard
