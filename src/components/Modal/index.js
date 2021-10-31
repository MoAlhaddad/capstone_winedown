import React from 'react';
import { Modal as BootstrapModal, ModalBody} from 'react-bootstrap';

export default function Modal({openModal, setOpenModal, headerTitle, children, hasCancelButton}) {
    console.log("MODAL boolean:", openModal);
    const onCancel = () => setOpenModal(false);
    return (
        <BootstrapModal show={openModal} toggle={() => setOpenModal(!openModal)}>
            <BootstrapModal.Header>{headerTitle}</BootstrapModal.Header>
            <BootstrapModal.Body>
                {React.cloneElement(children, { openModal, setOpenModal, hasCancelButton, onCancel })}
            </BootstrapModal.Body>
        </BootstrapModal>
    );
}