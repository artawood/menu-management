import React from "react";

//Bootstrap Imports
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { Push } from "../../Icons";
import { CloseButton } from "../../Buttons";

//Data Imports
import data from "../../../models/data.json";

const style = {
  modalBody: {
    paddingLeft: 100
  },
  modalTitle: {
    padding: "0 0 0 100px",
    fontWeight: 500
  },
  li: {
    fontSize: 24
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
      pushComplete: false,
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
    this.setState({ show: false, pushComplete: false });
  }

  handlePushingChanges() {
    this.setState({
      show: false,
      pushed: true
    });
    setTimeout(() => {
      this.setState({ pushed: false, pushComplete: true });
    }, 3000);
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div>
        <li className="nav-item hover" onClick={this.handleShow}>
          <a className="nav-link ml-5" href="#">
            <span data-feather="push-changes">
              <Push />{" "}
            </span>
            Push Changes
          </a>
        </li>

        <Modal show={this.state.show} onHide={this.handleClose} centered>
          <Modal.Header className="">
            <CloseButton handleClose={this.handleClose} />
          </Modal.Header>
          <Modal.Title style={style.modalTitle}>
            Are you sure you want <br /> to push changes to:
          </Modal.Title>

          <Modal.Body style={style.modalBody}>
            <h4 className="pt-2">Third Party Apps</h4>
            <ul>
              {this.state.thirdParties.map(thirdParty => (
                <li style={style.li}>{thirdParty}</li>
              ))}
            </ul>
            <h4>POS</h4>
            <ul>
              {this.state.pos.map(system => (
                <li style={style.li}>{system}</li>
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

        <Modal
          show={this.state.pushComplete}
          onHide={this.handleClose}
          centered
        >
          <Modal.Body className="text-center">
            <Modal.Title className="font-weight-bold">Error!</Modal.Title>
            <h2>Changes failed to push</h2>
            <p>
              Please contact{" "}
              <a href="mailto:support@itsacheckmate.com">
                support@itsacheckmate.com
              </a>{" "}
              for help.
            </p>
          </Modal.Body>
          <Modal.Footer className="mx-auto">
            <Button
              variant="primary"
              className="cm-btn-primary"
              onClick={this.handleClose}
            >
              Retry
            </Button>
            <Button variant="outline-secondary" onClick={this.handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default SampleModal;
