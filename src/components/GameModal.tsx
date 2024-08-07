import { ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Modal, Input } from "@nextui-org/react"

type GameModalProps = {
  isOpen: boolean;
  message: string;
  acceptAction: () => object;
}
export const GameModal = ({isOpen, message, acceptAction }: GameModalProps) => {
    return <Modal isOpen={isOpen} >
    <ModalContent>
      {(onClose) => (
        <>
          <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
          <ModalBody>
          <Input
      label={message}
      placeholder=' dvd'
      type='text'
      onInput={() => {}}
    />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Close
            </Button>
            <Button color="primary" onPress={acceptAction}>
              Action
            </Button>
          </ModalFooter>
        </>
      )}
    </ModalContent>
  </Modal>
}