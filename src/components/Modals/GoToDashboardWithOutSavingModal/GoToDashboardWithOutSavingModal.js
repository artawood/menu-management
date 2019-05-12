import React from "react";
import { Redirect, Link } from "react-router-dom";
//Bootstrap Imports
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class CancelSaveModal extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCancel = this.handleCancel.bind(this);

    this.state = {
      show: false,
      cancel: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleCancel() {
    this.setState({
      cancel: true
    });
  }

  render() {
    if (this.state.cancel === true) {
      return <Redirect to={"/"} />;
    }
    return (
      <div>
        <Link className="back-to-dashboard" onClick={this.handleShow}>
          <h4>&lt; Back to Dashboard</h4>
        </Link>

        <Modal show={this.state.show} onHide={this.handleClose} centered>
          <Modal.Body>
            Are you sure you want to return to Dashboard without saving?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-secondary" onClick={this.handleCancel}>
              Yes
            </Button>
            <Button variant="outline-secondary" onClick={this.handleClose}>
              No
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default CancelSaveModal;
