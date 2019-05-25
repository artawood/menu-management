import React from "react";

//Bootstrap Imports
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class SorryNoAddOptionModal extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div className="my-5 add-option-btn">
        <h4 onClick={this.handleShow}>+ Add More Options</h4>

        <Modal show={this.state.show} onHide={this.handleClose} centered>
          <Modal.Header className="mx-auto">
            <Modal.Title>Sorry!</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            This is just a prototype. Data cannot be added at this time.
          </Modal.Body>
          <Modal.Footer className="mx-auto">
            <Button variant="secondary" onClick={this.handleClose}>
              Got it!
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default SorryNoAddOptionModal;
