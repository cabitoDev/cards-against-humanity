import { Button, Input } from '@nextui-org/react'
import { useSelector } from 'react-redux'
import { useUpdateGame } from '../hooks/useUpdateGame'
import { useState } from 'react'
import { CardType, stateType } from '../model/GameModel'
import { useNavigate } from 'react-router-dom'

export const Cards = () => {
  const navigate = useNavigate()
  const game = useSelector((state: stateType) => state.game)
  const [newCard, setNewCard] = useState('')
  const { putGame } = useUpdateGame()

  return (
    <div>
      Cartas
      {game.whiteCards.map((card: CardType) => {
        return (
          <div key={card.id}>
            <div>{card.text}</div>
            <Button
              onClick={() =>
                putGame({
                  ...game,
                  whiteCards: game.whiteCards.filter(
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
        autoFocus={true}
        value={newCard}
        onChange={ev => setNewCard(ev.currentTarget.value)}
      />
      <Button
        isDisabled={newCard.length === 0}
        onClick={() => {
          putGame({ ...game, whiteCards: [...game.whiteCards, newCard] })
          setNewCard('')
        }}
      >
        Agregar
      </Button>
      <Button color='primary' onClick={() => navigate('/table')}>
        Volver
      </Button>
    </div>
  )
}
