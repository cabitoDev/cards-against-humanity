import { useNavigate } from 'react-router-dom'
import { gameApi } from '../api/gameApi'
import { useDispatch } from 'react-redux'
import { updateGame } from '../redux/gameSlice'
import { updatePlayer } from '../redux/playerSlice'

export const useNewGame = (tableName: string, playerName: string) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const newGame = {
    id: tableName,
    owner: {
      name: playerName
    }
  }

  const createGame = async () => {
    await gameApi.post('/', newGame).then(response => {
      console.log('Game created:', response.data)
      dispatch(updateGame(response.data))
      dispatch(updatePlayer(playerName))
    })
    navigate(`/table`)
  }

  return { createGame }
}
