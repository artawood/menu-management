import React from "react";
import { ReactComponent as DeleteIcon } from "../../../models/images/icon-delete.svg";
//Bootstrap Imports
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class RemoveItemModal extends React.Component {
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
    return (
      <div>
        <DeleteIcon onClick={this.handleShow} />

        <Modal show={this.state.show} onHide={this.handleClose} centered>
          <Modal.Header closeButton />
          <Modal.Title className="pb-5">
            Are you sure you want to <br />
            delete {this.props.name} ?
          </Modal.Title>
          <Modal.Footer className="mx-auto pt-2">
            <Button
              variant="outline-secondary"
              onClick={() => {
                this.props.removeItem(this.props.id, this.props.name);
              }}
            >
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

export default RemoveItemModal;
