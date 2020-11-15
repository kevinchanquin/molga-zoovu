import React from 'react'
import styled from 'styled-components'
import { colors, transition } from '../../shared/variables'

const StButton = styled.button`
  background-color: ${colors.white};
  border: 2px solid ${colors.border};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  height: 70px;
  border-radius: 35px;
  margin: 0;
  font-weight: 700;
  font-size: 24px;
  letter-spacing: 0.01em;
  padding: 0 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.primary};
  ${transition('all', '0.5s')};
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    background-color: ${colors.primary};
    color: ${colors.white};
    border-color: ${colors.primary};
  }

  & .material-icons {
    font-size: 30px;
    margin-left: 8px;
    margin-right: -16px;
  }
`

const Button = (props) => {
  return (
    <StButton {...props} />
  )
}

export default Button
