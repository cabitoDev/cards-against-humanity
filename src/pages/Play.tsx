import { useState, useEffect } from 'react'
import { Button } from '@nextui-org/react'
import { stateType } from '../model/GameModel'
import { useDispatch, useSelector } from 'react-redux'
import { updateGame } from '../redux/gameSlice'
import { useStompClient, useSubscription } from 'react-stomp-hooks'

export const Play = () => {
  const game = useSelector((state: stateType) => state.game)
  const myPlayer = useSelector((state: stateType) => state.player)
  const imOwner = myPlayer === game.owner.name
  const dispatch = useDispatch()
  const stompClient = useStompClient()

  const startGame = () => {
    publishMessage('updateGameState', 'PLAYING')
  }

  useEffect(() => {
    publishMessage('addPlayer', myPlayer)
  }, [])

  const publishMessage = (destination: string, info: string) => {
    if (stompClient) {
      stompClient.publish({
        destination: `/app/${destination}/${game.id}`,
        body: info
      })
    }
  }

  useSubscription(`/topic/updatedGame/${game.id}`, message => {
    dispatch(updateGame(JSON.parse(message.body)))
    console.log(message.body)
  })
  useSubscription(`/topic/updatedGameState/${game.id}`, message => {
    dispatch(updateGame({ ...game, state: JSON.parse(message.body) }))
    console.log(message.body)
    console.log(myPlayer, ' ha empezado el juego')
  })

  useSubscription(`/topic/addedPlayer/${game.id}`, message => {
    dispatch(updateGame({ ...game, players: [...game.players, message.body] }))
    console.log(message.body, ' se ha unido a la partida.')
  })

  return (
    <div>
      <h1>Juego en Progreso</h1>
      {imOwner && game.state === 'WAITING' && (
        <Button onClick={startGame}>Empezar</Button>
      )}
      {game.state === 'PLAYING' && (
        <div>
          <div
            onClick={() => publishMessage('updateGame', JSON.stringify(game))}
          ></div>
          <div>
            {game &&
              game.cards &&
              game.cards.map(card => (
                <Button key={card.id}>{card.text}</Button>
              ))}
          </div>
        </div>
      )}
    </div>
  )
}
