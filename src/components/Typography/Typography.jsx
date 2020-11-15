import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../shared/variables'

const StH1 = styled.h1`
  color: ${({ color }) => colors[color]};
  margin: 0;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.01em;
`
const StH2 = styled.h2`
  color: ${({ color }) => colors[color]};
  margin: 0;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.04em;
`
const StBody1 = styled.p`
  color: ${({ color }) => colors[color]};
  margin: 0;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.085em;
`
const StBody2 = styled.p`
  color: ${({ color }) => colors[color]};
  margin: 0;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.05em;
`

const defaultVariantMapping = {
  h1: StH1,
  h2: StH2,
  body1: StBody1,
  body2: StBody2
}

const Typography = ({ component, className, variant, ...props }) => {
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
    'body1',
    'body2'
  ]),
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'dark',
    'white',
    'border',
    'gray'
  ]),
  component: PropTypes.string
}

Typography.defaultProps = {
  variant: 'body1',
  color: undefined,
  component: undefined
}

export default Typography
