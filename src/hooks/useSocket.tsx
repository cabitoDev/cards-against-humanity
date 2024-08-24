import { useDispatch, useSelector } from 'react-redux'
import { useStompClient, useSubscription } from 'react-stomp-hooks'
import { PlayerType, stateType } from '../model/GameModel'
import { updateGame } from '../redux/gameSlice'

export const useSocket = () => {
  const game = useSelector((state: stateType) => state.game)
  const myPlayerName = useSelector((state: stateType) => state.player)
  const dispatch = useDispatch()
  const stompClient = useStompClient()

  const publishMessage = (destination: string, info?: string) => {
    if (stompClient) {
      stompClient.publish({
        destination: `/app/${destination}/${game.id}`,
        body: info || undefined
      })
    }
  }

  useSubscription(`/topic/updatedGame/${game.id}`, message => {
    if (stompClient) {
      dispatch(updateGame(JSON.parse(message.body)))
      console.log(JSON.parse(message.body))
    }
  })
  useSubscription(`/topic/updatedGameState/${game.id}`, message => {
    dispatch(updateGame({ ...game, state: message.body }))
    console.log(message.body)
    console.log(myPlayerName, ' ha empezado el juego')
  })

  useSubscription(`/topic/addedPlayer/${game.id}`, message => {
    if (stompClient) {
      const newPlayer: PlayerType = JSON.parse(message.body)
      dispatch(updateGame({ ...game, players: [...game.players, newPlayer] }))
      console.log(newPlayer.name, ' se ha unido a la partida.')
    }
  })

  return { publishMessage }
}
