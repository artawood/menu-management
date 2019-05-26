import React from "react";

//Bootstrap Imports
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { CloseButton } from "../../Buttons";
import { Edit } from "../../Icons";

class EditItemPriceModal extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.showSaved = this.showSaved.bind(this);
    this.gotIt = this.gotIt.bind(this);

    this.state = {
      show: false,
      name: props.name,
      price: props.price,
      showSaved: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  showSaved() {
    this.setState({
      show: false,
      showSaved: true
    });
  }

  gotIt() {
    this.setState({
      name: this.props.name,
      price: this.props.price,
      showSaved: false
    });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="float-left">
        <span onClick={this.handleShow} className="edit-icon">
          <Edit />
        </span>

        <Modal show={this.state.show} onHide={this.handleClose} centered>
          <Modal.Header className="bg-gray">
            <h2 className="pt-3">Edit Item Price: {this.state.price}</h2>
            <CloseButton handleClose={this.handleClose} />
          </Modal.Header>
          <Modal.Body className="pt-5">
            <InputGroup size="lg" className="pb-3">
              <FormControl
                value={this.state.price}
                name="price"
                onChange={this.handleInputChange}
                placeholder="edit price"
                aria-label="price"
              />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer className="mx-auto">
            <Button variant="secondary" onClick={this.handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={this.showSaved}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.showSaved} onHide={this.handleClose} centered>
          <Modal.Header />
          <Modal.Body className="text-center">
            <Modal.Title>Sorry!</Modal.Title>
            This is just a prototype. Data cannot be edited at this time.
          </Modal.Body>
          <Modal.Footer className="mx-auto">
            <Button variant="secondary" onClick={this.gotIt}>
              Got it!
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default EditItemPriceModal;
