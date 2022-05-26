import React from "react";
import { imagePath } from "../../../utils/axios";
import "./Modal.css";

const Modal = ({ action, img }) => {
  return (
    <div className="modal">
      <div className="close-modal">
        <button onClick={action}>Close </button>
      </div>
      <div className="modal-img">
        <img src={imagePath + img} />
      </div>
    </div>
  );
};

export default Modal;
