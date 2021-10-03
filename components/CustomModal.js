import React from "react";
import Modal from "react-bootstrap/Modal";
import AuthContext from "../contexts/AuthContext";
import { useContext, useState } from "react";
export default function CustomModal({ jumpFrame, children }) {
  const { setModalShow, modalShow } = useContext(AuthContext);
  return (
    <Modal
      show={modalShow}
      onHide={() => {
        setModalShow(false);
      }}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      dialogClassName={jumpFrame}
    >
      {children}
    </Modal>
  );
}
