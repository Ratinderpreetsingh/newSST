import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useDeleteCustomerMutation } from '../redux/QueryAPi/customer'; // Adjust this path if needed

const useDeleteModal = () => {
    const [show, setShow] = useState(false);
    const [itemId, setItemId] = useState(null);
    const [deleteCustomer,{isLoading,isSuccess}] = useDeleteCustomerMutation();

    const handleShow = (id) => {
        setItemId(id);
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
        setItemId(null); // Clear the ID on close
    };

    const handleConfirmDelete = () => {
        if (itemId) {
            console.log(`Deleting item with ID: ${itemId}`);
            deleteCustomer(itemId);
            handleClose(); // Close the modal after confirming
        } else {
            console.error('No item ID to delete');
        }
    };

    const ModalComponent = () => (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this item with ID: {itemId}?</Modal.Body>
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
    };
};

export default useDeleteModal;
