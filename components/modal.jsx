"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

export default function ModalProp({
  modalTitle,
  children,
  modalActions,
  modalTrigger,
  modalSize,
  modalPlacement,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {modalTrigger(onOpen)}
      <Modal
        size={modalSize}
        isOpen={isOpen}
        placement={modalPlacement}
        onClose={onClose}
        isDismissable={true}
        scrollBehavior="normal"
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            {modalTitle}
          </ModalHeader>
          <ModalBody>{children}</ModalBody>
          <ModalFooter>{modalActions(onClose)}</ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
