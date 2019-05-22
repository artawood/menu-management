import React from "react";

//Bootstrap Imports
import Modal from "react-bootstrap/Modal";

class FetchDataModal extends React.Component {
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
    setTimeout(() => {
      this.setState({ show: false });
    }, 3000);
  }

  render() {
    return (
      <div>
        <li className="nav-item" onClick={this.handleShow}>
          <a className="nav-link" href="#">
            <span data-feather="fetch-data">
              <i class="fas fa-sync" />{" "}
            </span>
            Fetch Data
          </a>
        </li>

        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          centered
          size="sm"
        >
          <Modal.Body className="text-center">
            <Modal.Title>Fetching Latest Data</Modal.Title>
            <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="fetching" />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default FetchDataModal;
