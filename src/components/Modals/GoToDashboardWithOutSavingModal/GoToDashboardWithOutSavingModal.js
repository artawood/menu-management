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
        <Link className="back-to-dashboard-link" onClick={this.handleShow}>
          <h4 className="back-to-dashboard">&lt; Back to Dashboard</h4>
        </Link>

        <Modal show={this.state.show} onHide={this.handleClose} centered>
          <Modal.Header className="text-center" closeButton />
          <Modal.Body>
            <Modal.Title className="text-center px-5">
              Are you sure you want to return to Dashboard without saving?
            </Modal.Title>
          </Modal.Body>
          <Modal.Footer className="mx-auto">
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
