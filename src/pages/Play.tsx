import { useState, useEffect } from 'react'
import { Button } from '@nextui-org/react'
import { Client } from '@stomp/stompjs' // Cambia la importación aquí
import { stateType } from '../model/GameModel'
import { useDispatch, useSelector } from 'react-redux'
import { updateGame } from '../redux/gameSlice'
import { useStompClient, useSubscription } from 'react-stomp-hooks'

export const Play = () => {
  const game = useSelector((state: stateType) => state.game)
  const dispatch = useDispatch()
  const [client, setClient] = useState<Client | null>(null)

  const stompClient = useStompClient()

  const publishMessage = () => {
    if (stompClient) {
      stompClient.publish({
        destination: '/app/broadcast',
        body: 'Hello World'
      })
    }
  }
  // Subscribe to the topic that we have opened in our spring boot app
  useSubscription('/topic/reply', message => {
    console.log(message.body)
  })

  const dealCards = () => {
    if (client && client.connected && game) {
      // Verifica si el cliente está conectado
      client.publish({
        destination: '/app/dealCards',
        body: JSON.stringify(game)
      })
    } else {
      console.error('No se puede enviar el mensaje: Cliente no está conectado.')
    }
  }

  const playCard = (cardId: number) => {
    if (client && game) {
      const playRequest = {
        gameId: game.id,
        playerId: 'playerId', // Aquí debe ir el ID del jugador actual
        cardId: cardId
      }
      client.publish({
        destination: '/app/playCard',
        body: JSON.stringify(playRequest)
      })
    }
  }

  const selectWinner = () => {
    if (client && game) {
      client.publish({ destination: '/app/selectWinner', body: game.id })
    }
  }

  return (
    <div>
      <h1>Juego en Progreso</h1>
      <div onClick={publishMessage}> Send message </div>

      <div>
        {game &&
          game.cards &&
          game.cards.map(card => (
            <Button key={card.id} onClick={() => playCard(card.id)}>
              {card.text}
            </Button>
          ))}
      </div>
      <Button onClick={dealCards}>Repartir Cartas</Button>
      <Button onClick={selectWinner}>Seleccionar Ganador</Button>
    </div>
  )
}
