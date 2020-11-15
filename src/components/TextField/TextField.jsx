import React from 'react'
import styled from 'styled-components'
import { colors, transition } from '../../shared/variables'

const StInput = styled.input`
  width: 100%;
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: 0;
  height: 24px;
  border-bottom: 2px solid ${colors.border};
  min-height: 80px;
  font-family: inherit;
  font-size: 28px;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.04em;
  color: ${colors.primary};
  text-align: center;
  ${transition('border-color', '0.5s')}

  &:focus {
    outline: none;
    border-bottom: 2px solid ${colors.primary};
  }

  &::placeholder {
    color: ${colors.gray};
    font-weight: 400;
    font-style: oblique;
  }
`

const TextFied = (props) => {
  return (
    <StInput {...props} />
  )
}

export default TextFied
