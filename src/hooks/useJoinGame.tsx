import { useNavigate } from 'react-router-dom'
import { gameApi } from '../api/gameApi'
import { useDispatch } from 'react-redux'
import { updateGame } from '../redux/gameSlice'
import { updatePlayer } from '../redux/playerSlice'

export const useJoinGame = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const joinGame = async (tableName: string, playerName: string) => {
    await gameApi
      .post(`/join/${tableName}`, { name: playerName })
      .then(response => {
        console.log('Joined into game:', response.data)
        dispatch(updateGame(response.data))
        dispatch(updatePlayer(playerName))
      })
    navigate(`/table`)
  }

  return { joinGame }
}
