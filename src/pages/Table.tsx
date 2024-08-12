import { Button } from '@nextui-org/react'
import { useNavigate } from 'react-router-dom'

export const Table = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Button onClick={() => navigate('/table/play')}>Empezar partida</Button>
      <Button onClick={() => navigate('/table/cards')}>Cartas</Button>
    </div>
  )
}
