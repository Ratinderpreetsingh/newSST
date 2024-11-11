import { useState, useCallback } from "react";
import { Modal, Button, InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {
  useDeleteShopMutation,
  useGetAllShopsNameQuery,
  useShopAssignMutation,
} from "../../redux/QueryAPi/shopApi";
import { toast } from "react-toastify";

const useShopDeleteModal = () => {
  const [show, setShow] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [shopname,setShopName]=useState('')
  const [shopID,setShopID]=useState('')


  const [ids, setIds] = useState({
    current_psg_id: "",
    update_psg_id: "",
  });
const [deleteShop,{isLoading}]=useDeleteShopMutation()
  const { data: shopList, error } = useGetAllShopsNameQuery((name = "")); // Removed the unnecessary parameter
  const [shopAssign] = useShopAssignMutation();

  const handleShow = useCallback((shop) => {
    setShopName(shop?.m_shop_name_display)
    setShopID(shop?.id)
    setShow(true);
    setIds({
      current_psg_id: shop?.psg_id || "",
      update_psg_id: "",
    });
  }, []);

  const handleClose = useCallback(() => {
    setShow(false);
  }, []);

  const handleUpdate = (e) => {
    setIds((prevState) => ({
      ...prevState,
      update_psg_id: e.target.value,
    }));
  };

  const handleAssign = async () => {
    console.log(ids);
    if (ids.update_psg_id) {
      try {
        await shopAssign(ids);
        setShow(false);
        toast.success("Shop assigned successfully")
      } catch (error) {
        console.error("Error assigning shop:", error);
      }
    }
  };

  const handleConfirmDelete = async (e) => {
    e.preventDefault();

    if (isChecked) {
      console.log("Delete confirmed");
      // Perform delete action here or trigger an API call
      await  deleteShop(shopID)
      toast.success("Shop Delete successfully")

          handleClose();
    } else {
      console.error("Please confirm the deletion by checking the box");
    }
  };

  const ModalComponent = () => (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Delete Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex gap-3 justify-content-between">
        {/* <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
            className="form-control !disable"
          />
      to */}
          <Form.Select
            value={ids.update_psg_id}
            onChange={handleUpdate}
            aria-label="Select Shop to Assign"
          >
            <option value="" disabled selected>
              Select
            </option>{" "}
            {/* Default option */}
            {!isChecked &&shopList?.data?.map((shop, index) => (
              <option disabled={isChecked} key={shop.psg_id} value={shop.psg_id}>
                {shop?.shop_name}
              </option>
            ))}
          </Form.Select>
          <Button
            variant="danger"
            onClick={handleAssign}
            disabled={isChecked}
          >
            Assign
          </Button>
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
          <input
            type="checkbox"
            id="delete"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <label htmlFor="delete" className="ml-2" style={{marginLeft:'5px'}}>
            Are you sure you want to delete <strong>{shopname}</strong> with ID:
            <strong>{ids.current_psg_id}</strong>?
          </label>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="danger"
          onClick={handleConfirmDelete}
          disabled={!isChecked}
        >
          {isLoading?'Delting...':'Delete'}
        </Button>
      </Modal.Footer>
    </Modal>
  );

  return {
    handleShow,
    ModalComponent,
  };
};

export default useShopDeleteModal;
