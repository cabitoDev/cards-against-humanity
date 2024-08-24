import { Button } from '@nextui-org/react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { gameApi } from '../api/gameApi'
import { useDispatch, useSelector } from 'react-redux'
import { stateType } from '../model/GameModel'
import { updateGame } from '../redux/gameSlice'

export const Table = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const state = useSelector((state: stateType) => state)
  useEffect(() => {
    gameApi
      .post(`/join/${state.game.id}`, { name: state.player })
      .then(response => {
        dispatch(updateGame(response.data))
      })
  }, [])
  return (
    <div>
      <Button onClick={() => navigate('/table/play')}>Ir a la partida</Button>
      <Button onClick={() => navigate('/table/cards')}>Cartas</Button>
    </div>
  )
}
