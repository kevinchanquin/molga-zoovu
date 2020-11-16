import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { breakpoints, colors, transition } from '../../../shared/variables'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../constants'

const StArea = styled.div`
  border-radius: 8px;
  position: relative;
  border: 2px dashed ${colors.secondary};
  border: ${({ hasChild }) => hasChild && 'none'};
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
    top: -2px;
    left: -2px;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    z-index: 2;
    ${({ moveIndex }) => moveIndex && transition('transform', '0.6s')}
    transform: ${({ moveIndex }) => moveIndex && (`
      translateX(calc((100% + 16px) * ${moveIndex}))
    `)};

    @media ${breakpoints.md} {
      transform: ${({ moveIndex }) => moveIndex && `translateX(calc((100% + 32px) * ${moveIndex}))`};
    }
  }
`

const DropArea = ({
  children,
  id,
  handleDrop,
  dropped,
  expected,
  index,
  ...props
}) => {
  const [{ isOverItem }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item) => handleDrop({ id, expected, dropped }, item),
    canDrop: ({ source }, monitor) => (
      source === 'droppableArea' || (source === 'pickupArea' && !dropped)
    ),
    collect: (monitor) => ({
      isOverItem: monitor.isOver() ? monitor.getItem() : null
    })
  })

  return (
    <StArea
      ref={drop}
      moveIndex={!!isOverItem && ((index - isOverItem.index) * -1)}
      {...props}
    >
      {children}
    </StArea>
  )
}

DropArea.propTypes = {
  id: PropTypes.string,
  handleDrop: PropTypes.func,
  dropped: PropTypes.object,
  expected: PropTypes.string
}

DropArea.defaultProps = {
  hasError: false,
  id: undefined,
  handleDrop: () => {}
}

export default React.memo(DropArea)
