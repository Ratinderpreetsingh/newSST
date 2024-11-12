import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDeleteShopMutation, useGetAllShopsNameQuery, useShopAssignMutation } from '../../redux/QueryAPi/shopApi';
import { toast } from 'react-toastify';

const CheckboxModal = ({ shop, onClose }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [shopID, setShopID] = useState('');
  const [shopName, setShopName] = useState('');
  const [ids, setIds] = useState({ current_psg_id: '', update_psg_id: '' });
  
  const [deleteShop, { isLoading: isDeleting, isSuccess, isError }] = useDeleteShopMutation();
  const { data: shopList, error: shopListError, isLoading: isLoadingShops } = useGetAllShopsNameQuery(name='');
  const [shopAssign, { isLoading: isAssigning }] = useShopAssignMutation();

  useEffect(() => {
    if (shop) {
      setShopName(shop.m_shop_name_display);
      setShopID(shop.id);
      setIds((prev) => ({ ...prev, current_psg_id: shop.psg_id || '' }));
    }
  }, [shop]);

  const handleUpdate = (e) => {
    setIds((prevState) => ({
      ...prevState,
      update_psg_id: e.target.value,
    }));
  };

  const handleAssign = async () => {
    if (!ids.update_psg_id) {
      toast.error('Please select a shop to assign the customer to.');
      return;
    }

    try {
      await shopAssign(ids).unwrap();
      toast.success("Shop assigned successfully");
      onClose();
    } catch (error) {
      toast.error("Error assigning shop: " + error.message);
      console.error(error);
    }
  };

  const handleConfirmDelete = async (e) => {
    e.preventDefault();

    if (!isChecked) {
      toast.error('Please confirm the deletion by checking the box.');
      return;
    }

    try {
      await deleteShop(shopID).unwrap();
      toast.success('Shop deleted successfully.');
      onClose();  // Close the modal after deletion
    } catch (error) {
      toast.error('An error occurred while deleting the shop.');
      console.error(error);
    }
  };

  return (
    <Modal show={!!shop} onHide={onClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Confirm Deletion</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column p-3 border rounded-3 shadow-sm">
          {/* Heading */}
          <p className="mb-2">
            Are you sure you want to delete <strong>{shopName}</strong> and shop ID{' '}
            <strong>{ids.current_psg_id}</strong>?
          </p>
          <h6 className="small" style={{ color: '#dc3545' }}>
            If you wish to delete the <strong>{shopName}</strong>, please assign the customer to another shop first.
          </h6>

          {/* Dropdown */}
          <div className="mt-3">
            <Form.Select
              value={ids.update_psg_id}
              onChange={handleUpdate}
              aria-label="Select Shop to Assign"
              className="form-select-lg"
            >
              <option value="" disabled selected>
                Select a Shop to Assign
              </option>
              {/* Loop through the shop list and render options */}
              {!isChecked &&
                shopList?.data?.map((shop, index) => (
                  <option key={shop.psg_id} value={shop.psg_id}>
                    {shop?.shop_name}
                  </option>
                ))}
            </Form.Select>
          </div>

          {/* Assign Button */}
          <div className="mt-4">
            <Button
              variant="danger"
              onClick={handleAssign}
              disabled={isChecked}
              className={` ${isChecked ? 'opacity-50' : ''}`}
            >
              Assign Shop
            </Button>
          </div>
        </div>

        <div className="text-center my-3">
          <div className="text-muted d-flex justify-content-center align-items-center gap-2">
            <div
              style={{
                height: "1px",
                width: "80px",
                backgroundColor: "lightgray",
              }}
            ></div>
            <span>or</span>
            <div
              style={{
                height: "1px",
                width: "80px",
                backgroundColor: "lightgray",
              }}
            ></div>
          </div>
        </div>

        <div className="d-flex align-items-center">
          <Form.Check
            type="checkbox"
            id="delete"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            label={
              <>
                Are you sure you want to delete <strong>{shopName}</strong> with all customers?
              </>
            }
            style={{ color: '#dc3545' }}
          />
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="danger" onClick={handleConfirmDelete} disabled={isDeleting || isAssigning}>
          {isDeleting ? 'Deleting...' : 'Delete Shop'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CheckboxModal;
