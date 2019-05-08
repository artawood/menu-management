import React, { component } from "react";

//Bootstrap Imports
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

//Data Imports
import data from "../../../models/data.json";

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
              <i class="fas fa-location-arrow" />{" "}
            </span>
            Push Changes
          </a>
        </li>

        <Modal show={this.state.show} onHide={this.handleClose} centered>
          <Modal.Body>
            <h4>Are you sure you want to push changes to:</h4>
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
              onClick={this.handlePushingChanges}
            >
              Yes
            </Button>
            <Button variant="outline-secondary" onClick={this.handleClose}>
              No
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal
          show={this.state.pushed}
          onHide={this.handleClose}
          centered
          size="sm"
        >
          <Modal.Body className="text-center">
            <Modal.Title>Pushing Changes</Modal.Title>
            <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default SampleModal;
