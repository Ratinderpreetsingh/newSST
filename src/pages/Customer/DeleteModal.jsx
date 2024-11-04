import React from 'react';

const DeleteModal = ({ deleteCtr, onConfirm }) => {
    console.log(deleteCtr,onConfirm)
    return (
        <div className={`modal fade ${deleteCtr ? 'show' : ''}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden={!deleteCtr}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Confirm Delete</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => onConfirm(false)}></button>
                    </div>
                    <div className="modal-body">
                        Are you sure you want to delete this item?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => onConfirm(false)}>Close</button>
                        <button type="button" className="btn btn-danger" onClick={onConfirm}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;
