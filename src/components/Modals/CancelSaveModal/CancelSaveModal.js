import React from "react";
import { Redirect } from "react-router-dom";
//Bootstrap Imports
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CloseButton } from "../../Buttons";

class CancelSaveModal extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCancel = this.handleCancel.bind(this);

    this.state = {
      show: false,
      cancel: false,
      save: false
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

  handleSave() {
    this.setState({ save: true });
  }

  render() {
    if (this.state.cancel === true) {
      return <Redirect to={"/itemdetails/" + this.props.id} />;
    }
    return (
      <div>
        <Button
          variant="outline-secondary"
          size="lg"
          className="mr-3"
          onClick={this.handleShow}
        >
          Cancel
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose} centered>
          <Modal.Header>
            <CloseButton handleClose={this.handleClose} />
          </Modal.Header>
          <Modal.Title className="pb-5 px-4 text-center">
            Are you sure you don't want
            <br /> to save changes?
          </Modal.Title>
          <Modal.Footer className="mx-auto pt-2">
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
