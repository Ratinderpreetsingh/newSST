import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useDeleteCustomerMutation } from '../redux/QueryAPi/customer'; // Adjust this path if needed

const useDeleteModal = () => {
    const [show, setShow] = useState(false);
    const [itemId, setItemId] = useState(null);
    const [custId, setCustomerId] = useState(null);

    const [name, setName] = useState(null);

    const [deleteCustomer,{isLoading,isSuccess}] = useDeleteCustomerMutation();

    const handleShow = (value) => {
        setItemId(value?.id);
        setCustomerId(value?.UID)
        setName(value?.OwnerFName + ' ' + value?.OwnerLName)
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
        setItemId(null); // Clear the ID on close
    };

    const handleConfirmDelete =async () => {
        if (itemId) {
            deleteCustomer(itemId);
           await handleClose(); // Close the modal after confirming
        } else {
            console.error('No item ID to delete');
        }
    };

    const ModalComponent = () => (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete  <span style={{fontWeight:'bold'}}>{name}</span> with ID: <span style={{fontWeight:'bold'}}>{custId }</span> ?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="danger" onClick={handleConfirmDelete}>
                   {isLoading? "Deleting...":"Delete"}
                </Button>
            </Modal.Footer>
        </Modal>
    );

    return {
        handleShow,
        ModalComponent,
        isLoading,
        isSuccess
    };
};

export default useDeleteModal;
