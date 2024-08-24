import { useEffect, useState } from 'react'
import { Button } from '@nextui-org/react'
import { GameType, stateType } from '../model/GameModel'
import { useSelector } from 'react-redux'
import { useSocket } from '../hooks/useSocket'

export const Play = () => {
  const game = useSelector((state: stateType) => state.game)
  const myPlayerName = useSelector((state: stateType) => state.player)

  const findPlayer = (player: string, game: GameType) => {
    const retPlayer = game.players.find(p => p.name === player)
    return retPlayer
  }

  const [myPlayer, setMyPlayer] = useState(findPlayer(myPlayerName, game))
  const imOwner = myPlayerName === game.owner.name
  const { publishMessage } = useSocket()

  useEffect(() => {
    setMyPlayer(findPlayer(myPlayerName, game))
  }, [game])

  const startGame = () => {
    publishMessage('startGame', JSON.stringify(game))
  }

  useEffect(() => {
    if (!game.players.find(p => p.name === myPlayerName)) {
      publishMessage('addPlayer', myPlayerName)
    }
  }, [])

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
              game.whiteCards &&
              game.whiteCards.map(card => (
                <Button key={card.id}>{card.text}</Button>
              ))}
          </div>
        </div>
      )}
      {myPlayer &&
        myPlayer.hand.map(card => <div key={card.id}>{card.text}</div>)}
    </div>
  )
}
