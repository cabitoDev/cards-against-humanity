import { Button } from "@nextui-org/react"
import { GameModal } from "./components/GameModal"
import { useState } from "react"

export const CardsApp = () => {
  const [ openModal, setOpenModal ] = useState<'ENTER' | 'CREATE'>()
  const modal = {
    ENTER: {
      message: 'Introduce el código de tu partida',
      acceptAction: () => {}
    },
    CREATE: {
      message: 'Introduce un nombre para crear una partida',
      acceptAction: () => {}
    }
  }

  const enterGameClick = () => {
    setOpenModal('ENTER')
  }
  return <>
  <Button size="md" variant="solid" onClick={ enterGameClick }>Entra en la partida</Button>
  <Button size="md" variant="solid">Crea una partida nueva</Button>
  {openModal && <GameModal isOpen={openModal === 'ENTER'} message={modal[openModal].message} acceptAction={modal[openModal].acceptAction}></GameModal>}
  </>
}