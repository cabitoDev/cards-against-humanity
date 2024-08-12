import { Button, Input } from '@nextui-org/react'
import { useSelector } from 'react-redux'
import { useUpdateGame } from '../hooks/useUpdateGame'
import { useState } from 'react'
import { CardType, stateType } from '../model/GameModel'

export const Cards = () => {
  const game = useSelector((state: stateType) => state.game)
  const [newCard, setNewCard] = useState('')
  const { putGame } = useUpdateGame()

  return (
    <div>
      Cartas
      {game.cards.map((card: CardType) => {
        return (
          <div key={card.id}>
            <div>{card.text}</div>
            <Button
              onClick={() =>
                putGame({
                  ...game,
                  cards: game.cards.filter(
                    (deleteCard: CardType) => deleteCard.id !== card.id
                  )
                })
              }
            >
              Quitar
            </Button>
          </div>
        )
      })}
      <Input
        value={newCard}
        onChange={ev => setNewCard(ev.currentTarget.value)}
      />
      <Button
        isDisabled={newCard.length === 0}
        onClick={() => {
          putGame({ ...game, cards: [...game.cards, newCard] })
          setNewCard('')
        }}
      >
        Agregar
      </Button>
    </div>
  )
}
