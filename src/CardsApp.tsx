import { Button } from "@nextui-org/react"
import { GameModal } from "./components/GameModal"
import { useState } from "react"

export const CardsApp = () => {
  const [openModal, setOpenModal] = useState<'ENTER' | 'CREATE'>()
  const modals = {
    ENTER: {
      message: 'Introduce el código de tu mesa',
      acceptAction: () => { },
    },
    CREATE: {
      message: 'Introduce un nombre para crear una mesa',
      acceptAction: () => { },
    }
  }

  const buttonClick = (modal: 'CREATE' | 'ENTER') => {
    setOpenModal(modal)
  }
  return <>
    <Button size="md" variant="solid" onClick={() => buttonClick('ENTER')}>Entra en la partida</Button>
    <Button size="md" variant="solid" onClick={() => buttonClick('CREATE')}>Crea una partida nueva</Button>
    {openModal && Object.keys(modals).map(modal =>
      <GameModal key={modal} isOpen={openModal === modal} title={modals[openModal].message} acceptAction={modals[openModal].acceptAction}></GameModal>
    )}
  </>
}