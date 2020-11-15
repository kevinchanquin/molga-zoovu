import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { breakpoints, colors, transition } from '../../../shared/variables'

const StArea = styled.div`
  border-radius: 8px;
  position: relative;
  border: 2px dashed ${colors.secondary};
  border: ${({ hasChild }) => hasChild && 'none'};
  ${({ hasError }) => hasError && (`
    border: 2px solid ${colors.error};
  `)};
  ${transition('border-color', '0.5s')}

  @media ${breakpoints.sm} {
    border-radius: 16px;
  }

  &::before {
    content: '';
    display: block;
    margin-top: 100%;
  }

  & > * {
    position: absolute !important;
    top: 0;
    width: 100%;
    height: 100%;
  }
`

const DropArea = ({ children, hasChild, hasError, ...props }) => {
  return (
    <StArea
      hasChild={!hasError && !!children}
      hasError={!!children && hasError}
      {...props}
    >
      {children}
    </StArea>
  )
}

DropArea.propTypes = {
  hasError: PropTypes.bool
}

DropArea.defaultProps = {
  hasError: false
}

export default DropArea
