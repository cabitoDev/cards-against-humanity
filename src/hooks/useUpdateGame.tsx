import { gameApi } from '../api/gameApi'
import { useDispatch, useSelector } from 'react-redux'
import { updateGame } from '../redux/gameSlice'
import { GameRequestType, GameType, stateType } from '../model/GameModel'

export const useUpdateGame = () => {
  const dispatch = useDispatch()
  const game = useSelector((state: stateType) => state.game)

  const putGame = async (updatedGame: GameRequestType) => {
    await gameApi.put(`/${game.id}`, updatedGame).then(response => {
      console.log('Game updated:', response.data)
      dispatch(updateGame(response.data))
    })
  }

  return { putGame }
}
