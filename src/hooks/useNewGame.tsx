import { useNavigate } from 'react-router-dom'
import { gameApi } from '../api/gameApi'

export const useNewGame = (tableName: string, playerName: string) => {
  const navigate = useNavigate()
  const newGame = {
    id: tableName,
    owner: {
      name: playerName
    }
  }

  const createGame = async () => {
    await gameApi.post('/', newGame)
    navigate(`/game/${tableName}`)
  }

  return { createGame }
}
