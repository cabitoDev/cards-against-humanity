import {
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Modal,
  Input
} from '@nextui-org/react'
import { Dispatch, SetStateAction } from 'react'

type GameModalProps = {
  isOpen: boolean
  title: string
  acceptAction: () => void
  setTableName: Dispatch<SetStateAction<string>>
  onClose: () => void
}
export const GameModal = ({
  isOpen,
  title,
  acceptAction,
  setTableName,
  onClose
}: GameModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader className='flex flex-col gap-1'>{title}</ModalHeader>
        <ModalBody>
          <Input
            label='Nombre de la mesa'
            type='text'
            onInput={ev => setTableName(ev.currentTarget.value)}
          />
        </ModalBody>
        <ModalFooter>
          <Button color='danger' variant='light' onPress={onClose}>
            Volver
          </Button>
          <Button color='primary' onPress={acceptAction}>
            Aceptar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
