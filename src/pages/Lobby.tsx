import { Button, Input } from '@nextui-org/react'
import { GameModal } from '../components/GameModal'
import { useState } from 'react'
import { useNewGame } from '../hooks/useNewGame'
import { useJoinGame } from '../hooks/useJoinGame'

export const Lobby = () => {
  const [openModal, setOpenModal] = useState<'ENTER' | 'CREATE'>()
  const [playerName, setPlayerName] = useState<string>('')
  const [tableName, setTableName] = useState<string>('')

  const { createGame } = useNewGame(tableName, playerName)
  const { joinGame } = useJoinGame()
  const modals = {
    ENTER: {
      message: 'Introduce el código de tu mesa',
      acceptAction: () => joinGame(tableName, playerName)
    },
    CREATE: {
      message: 'Introduce un nombre para crear una mesa',
      acceptAction: createGame
    }
  }

  const buttonClick = (modal: 'CREATE' | 'ENTER') => {
    setOpenModal(modal)
  }
  return (
    <>
      <Input
        value={playerName}
        onChange={ev => setPlayerName(ev.target.value)}
      />
      <Button
        isDisabled={!playerName}
        size='md'
        variant='solid'
        onClick={() => buttonClick('ENTER')}
      >
        Entra en la partida
      </Button>
      <Button
        isDisabled={!playerName}
        size='md'
        variant='solid'
        onClick={() => buttonClick('CREATE')}
      >
        Crea una partida nueva
      </Button>
      {openModal &&
        Object.keys(modals).map(modal => (
          <GameModal
            key={modal}
            setTableName={setTableName}
            isOpen={openModal === modal}
            title={modals[openModal].message}
            acceptAction={modals[openModal].acceptAction}
            onClose={() => setOpenModal(undefined)}
          ></GameModal>
        ))}
    </>
  )
}
