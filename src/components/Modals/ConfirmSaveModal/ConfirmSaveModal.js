import React from "react";
import { Redirect } from "react-router-dom";
//Bootstrap Imports
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CloseButton } from "../../Buttons";

class ConfirmSaveModal extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleSurvey = this.handleSurvey.bind(this);

    this.state = {
      show: false,
      cancel: false,
      save: false,
      survey: false
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

  handleSurvey() {
    this.setState({ survey: true });
    window.open("https://forms.gle/g52s3vPcjyBSTi1P8");
  }

  render() {
    if (this.state.save) {
      return <Redirect to={"/itemdetails/" + this.props.id} />;
    } else if (this.state.survey) {
      return <Redirect to={"/"} />;
    }
    return (
      <div>
        <Button
          variant="primary"
          size="lg"
          className="mr-3 checkmate-primary-btn px-4"
          onClick={this.handleShow}
        >
          Save
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose} centered>
          <Modal.Header>
            <CloseButton handleClose={this.handleClose} />
          </Modal.Header>
          <Modal.Body className="text-center px-5 py-2">
            Thank you for trying out this demo! Since this is prototype, data
            cannot be edited and updated at this moment. This was designed and
            developed by <a href="www.itsacheckmate.com">ItsaCheckmate, Inc.</a>{" "}
            If you like the design and concept, we appreciate your feedback!
          </Modal.Body>
          <Modal.Footer className="mx-auto">
            <Button variant="outline-secondary" onClick={this.handleSurvey}>
              Yes! Take me to your survey!
            </Button>
            <Button variant="outline-secondary" onClick={this.handleSave}>
              Continue with the demo
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ConfirmSaveModal;
