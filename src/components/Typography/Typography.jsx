import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

const StH1 = styled.h1`
  margin: 0;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.01em;
`
const StH2 = styled.h2`
  margin: 0;
  font-weight: 300;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.04em;
`
const StBody1 = styled.p`
  margin: 0;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.085em;
`

const defaultVariantMapping = {
  h1: StH1,
  h2: StH2,
  body1: StBody1
}

const Typography = ({ component, className, variant, color, ...props }) => {
  const Component = component || defaultVariantMapping[variant] || 'span'

  return (
    <Component
      {...props}
    />
  )
}

Typography.propTypes = {
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'body1'
  ]),
  component: PropTypes.string
}

Typography.defaultProps = {
  variant: 'body1',
  component: undefined
}

export default Typography
