import React from "react";

//Bootstrap Imports
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { Push } from "../../Icons";

//Data Imports
import data from "../../../models/data.json";

const style = {
  modalBody: {
    padding: "0px 200px 0px 0px",
    margin: "0 auto"
  },
  modalContent: {
    maxWidth: 400
  },
  modalTitle: {
    paddingLeft: 70
  }
};

class SampleModal extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handlePushingChanges = this.handlePushingChanges.bind(this);

    this.state = {
      show: false,
      pushed: false,
      thirdParties: [],
      pos: []
    };
  }

  componentDidMount() {
    this.setState({
      thirdParties: data.thirdParty,
      pos: data.pos
    });
  }
  handleClose() {
    this.setState({ show: false });
  }

  handlePushingChanges() {
    this.setState({
      show: false,
      pushed: true
    });
    setTimeout(() => {
      this.setState({ pushed: false });
    }, 3000);
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div>
        <li className="nav-item" onClick={this.handleShow}>
          <a className="nav-link" href="#">
            <span data-feather="push-changes">
              <Push />{" "}
            </span>
            Push Changes
          </a>
        </li>

        <Modal show={this.state.show} onHide={this.handleClose} centered>
          <Modal.Header closeButton className="" />
          <Modal.Title style={style.modalTitle}>
            Are you sure you want <br /> to push changes to:
          </Modal.Title>
          <Modal.Body style={style.modalBody}>
            <h5 className="pt-2">Third Party Apps</h5>
            <ul>
              {this.state.thirdParties.map(thirdParty => (
                <li>{thirdParty}</li>
              ))}
            </ul>
            <h5>POS</h5>
            <ul>
              {this.state.pos.map(system => (
                <li>{system}</li>
              ))}
            </ul>
          </Modal.Body>
          <Modal.Footer className="mx-auto">
            <Button
              variant="outline-secondary"
              className="cm-btn-secondary"
              onClick={this.handlePushingChanges}
            >
              Yes
            </Button>
            <Button
              variant="outline-secondary"
              className="cm-btn-secondary"
              onClick={this.handleClose}
            >
              No
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.pushed} onHide={this.handleClose} centered>
          <Modal.Body className="text-center">
            <Modal.Title>Pushing Changes</Modal.Title>
            <img
              src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
              alt="pushing"
            />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default SampleModal;
