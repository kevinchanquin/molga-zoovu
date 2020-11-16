import React, { useState, useCallback, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { breakpoints } from '../../shared/variables'
import { CardTypes, dropConfig } from './constants'
import GSDroppableArea from './sections/GSDroppableArea'
import GSHeader from './sections/GSHeader'
import GSPickupCards from './sections/GSPickupCards'
import { every, map, shuffle } from 'lodash'
import Context from '../../context'

const StRoot = styled.div`
  padding: 32px 16px;
  max-width: 1600px;
  margin: auto;

  @media ${breakpoints.md} {
    padding: 72px;
  }
`

const GameScreen = () => {
  const { addTimeOnError, endGame } = useContext(Context)
  const [pickupCards, setPickupCards] = useState(shuffle(CardTypes))
  const [dropAreas, setDropAreas] = useState(dropConfig)

  const handleDrop = useCallback((droppedArea, droppedCard) => {
    // add time on error
    if (droppedCard.variant !== droppedArea.expected) addTimeOnError()

    // remove card from pickupCards
    setPickupCards(map(pickupCards, card => {
      if (card.id !== droppedCard.id) return card
      else return {}
    }))

    // add card to drop area
    setDropAreas(map(dropAreas, area => {
      // if source is droppalbeArea, switch cards
      if (droppedCard.source === 'droppableArea' && area.dropped && area.dropped.id === droppedCard.id) {
        return { ...area, dropped: droppedArea.dropped }
      }

      // otherwise just update order
      if (area.id !== droppedArea.id) return area
      return { ...area, dropped: droppedCard }
    }))
  }, [pickupCards, dropAreas, addTimeOnError])

  // end game if every card is in place
  useEffect(() => {
    if (every(dropAreas, ({ expected, dropped }) => dropped && expected === dropped.variant)) {
      endGame()
    }
  }, [dropAreas, endGame])

  return (
    <StRoot>
      <GSHeader />
      <GSPickupCards data={pickupCards} />
      <GSDroppableArea data={dropAreas} handleDrop={handleDrop} />
    </StRoot>
  )
}

export default React.memo(GameScreen)
