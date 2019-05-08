import React from "react";

//Bootstrap Imports
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class FeatureNotAvailableModal extends React.Component {
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
      <div>
        <li className="nav-item" onClick={this.handleShow}>
          <a className="nav-link" href="#">
            <span data-feather="file-text">
              <i class="fas fa-cog" />{" "}
            </span>
            Setting
          </a>
        </li>
        <Modal show={this.state.show} onHide={this.handleClose} centered>
          <Modal.Header className="mx-auto">
            <Modal.Title>Sorry!</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            This feature is not yet available. Stay tuned for more update!
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

export default FeatureNotAvailableModal;
