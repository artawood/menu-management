import React from "react";

//Bootstrap Imports
import Modal from "react-bootstrap/Modal";

const PushingDataModal = () => (
  <Modal show={this.state.pushed} onHide={this.handleClose} centered size="sm">
    <Modal.Body className="text-center">
      <Modal.Title>Pushing Changes</Modal.Title>
      <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" />
    </Modal.Body>
  </Modal>
);

export default PushingDataModal;
