import { ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Modal, Input } from "@nextui-org/react"

type GameModalProps = {
  isOpen: boolean;
  title: string;
  acceptAction: () => void;
}
export const GameModal = ({isOpen, title, acceptAction }: GameModalProps) => {
    return <Modal isOpen={isOpen} >
    <ModalContent>
      {(onClose) => (
        <>
          <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
          <ModalBody>
          <Input
      label='Nombre de la mesa'
      type='text'
      onInput={() => {}}
    />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Volver
            </Button>
            <Button color="primary" onPress={acceptAction}>
              Aceptar
            </Button>
          </ModalFooter>
        </>
      )}
    </ModalContent>
  </Modal>
}