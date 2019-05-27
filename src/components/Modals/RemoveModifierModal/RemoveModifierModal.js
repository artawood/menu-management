import React from "react";

//Bootstrap Imports
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CloseButton } from "../../Buttons";
import { Trash } from "../../Icons";

class RemoveItemModal extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.removeModifier = this.props.removeModifier.bind(this);

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
        <span className="text-muted" onClick={this.handleShow}>
          <Trash />
        </span>

        <Modal show={this.state.show} onHide={this.handleClose} centered>
          <Modal.Header>
            <CloseButton handleClose={this.handleClose} />
          </Modal.Header>
          <Modal.Title className="pb-5 px-2 text-center">
            Are you sure you <br />
            want to delete
            <br />
            {this.props.name} ( {this.props.calories} calories )
          </Modal.Title>
          <Modal.Footer className="mx-auto pt-2">
            <Button
              variant="outline-secondary"
              onClick={() => {
                this.removeModifier(this.props.id, this.props.name);
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
