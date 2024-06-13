import React from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Button } from "reactstrap";
import deleteConfirmationImage from "../assets/img/img-BeepBeep.png";

interface DeleteConfirmationProps {
  onConfirmDelete: () => void;
}

const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({
  onConfirmDelete,
}) => {
  const handleDelete = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui card py-3">
            <div className="text-center mx-3 mt-2">
              <img src={deleteConfirmationImage} alt="" />
            </div>
            <div className="text-center">
              <p className="fw-semibold fs-2 mt-4">Menghapus Data Mobil</p>
              <div className="d-flex justify-content-center">
                <p className="w-75 fs-5">
                  Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin
                  ingin dihapus?
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-center my-4 gap-4">
              <div
                className="btn"
                onClick={() => {
                  onConfirmDelete();
                  onClose();
                }}
              >
                <div className="save-btn d-flex fw-semibold py-3 px-5">
                  <p className="mb-0">Ya</p>
                </div>
              </div>
              <div className="btn" onClick={onClose}>
                <div className="cancel-btn d-flex fw-semibold py-3 px-5">
                  <p className="mb-0">Tidak</p>
                </div>
              </div>
            </div>
          </div>
        );
      },
    });
  };

  return (
    <Button color="danger" outline onClick={handleDelete}>
      <div className="d-flex gap-2 my-1 mx-3 align-items-center">
        <div>
          <i className="fa-solid fa-trash"></i>
        </div>
        <div className="fw-semibold">Delete</div>
      </div>
    </Button>
  );
};

export default DeleteConfirmation;
