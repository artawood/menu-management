import React, { Component } from "react";
import "./EditItemDetails.css";

//Bootstrap Components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Table from "react-bootstrap/Table";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

//Component
import EditModifierList from "../../components/EditModifierList";
import CancelSaveModal from "../../components/Modals/CancelSaveModal";
import ConfirmSaveModal from "../../components/Modals/ConfirmSaveModal";
import GoToDashboardWithOutSavingModal from "../../components/Modals/GoToDashboardWithOutSavingModal";
import SorryNoAddOptionModal from "../../components/Modals/SorryNoAddOptionModal";

//dummy data
import data from "../../models/data.json";

class EditItemDetails extends Component {
  state = {
    item: data.menu.item[0],
    itemName: data.menu.item[0].name,
    modifiers: [],
    EditItemName: "",
    EditItemPrice: "",
    EditItemDescription: "",
    id: ""
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    let id = this.props.match.params.id;
    this.setState({
      item: data.menu.item[id],
      itemName: data.menu.item[id].name,
      modifiers: data.menu.item[id].modifier,
      EditItemName: data.menu.item[id].name,
      EditItemPrice: data.menu.item[id].price,
      EditItemDescription: data.menu.item[id].description,
      id: data.menu.item[id].id
    });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  removeModifier = modId => {
    let id = this.props.match.params.id;
    let modifier = data.menu.item[id].modifier.filter(
      modifier => modifier.id !== modId
    );
    this.setState({ modifier: modifier });
  };

  render() {
    return (
      <div className="item-detail-page">
        <Container>
          {/* Navigation and Timestamp */}
          <Row className="pb-4">
            <Col md="8">
              <GoToDashboardWithOutSavingModal />
            </Col>
            <Col md="4">
              <p className="text-muted float-right">Timestamp</p>
            </Col>
          </Row>
          {/* Item Image and details */}
          <Row>
            <Col md="8">
              <Row>
                <Col md="4">
                  <img
                    className="item-detail-image"
                    src={
                      this.state.item.imgURL
                        ? this.state.item.imgURL
                        : "https://imbindonesia.com/images/placeholder/camera.jpg"
                    }
                    alt={this.state.item.name}
                  />
                </Col>
                <Col md="8" className="pl-5">
                  <InputGroup size="lg">
                    <FormControl
                      value={this.state.EditItemName}
                      name="EditItemName"
                      onChange={this.handleInputChange}
                      placeholder="item name"
                      aria-label="itemName"
                    />
                  </InputGroup>
                  <div className="pt-2">
                    <h2 className="item-detail-header">Price</h2>
                    <InputGroup size="lg">
                      <FormControl
                        value={this.state.EditItemPrice}
                        name="EditItemPrice"
                        onChange={this.handleInputChange}
                        placeholder="item price"
                        aria-label="itemPrice"
                      />
                    </InputGroup>
                  </div>
                  <div className="pt-2">
                    <h4 className="item-detail-header">Description</h4>
                    <InputGroup size="lg">
                      <FormControl
                        as="textarea"
                        value={this.state.EditItemDescription}
                        name="EditItemDescription"
                        onChange={this.handleInputChange}
                        placeholder="item description"
                        aria-label="itemDescription"
                      />
                    </InputGroup>
                  </div>
                </Col>
              </Row>
            </Col>
            {/* Edit Button */}
            <Col md="4" />
          </Row>
          <h2>Options</h2>
          <Table bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Modifier Price</th>
                <th>Modifier Group Name</th>
                <th>Modifier Group Min</th>
                <th>Modifier Group Max</th>
                <th>Sold Out</th>
                <th>Delete</th>
              </tr>
            </thead>
            {this.state.modifiers.map(modifier => (
              <EditModifierList
                id={modifier.id}
                key={modifier.id}
                itemName={this.state.itemName}
                modifierName={modifier.name}
                calories={modifier.calories}
                groupName={modifier.groupName}
                groupMin={modifier.groupMin}
                groupMax={modifier.groupMax}
                price={modifier.price}
                soldOut={modifier.soldOut}
                removeModifier={this.removeModifier}
              />
            ))}
          </Table>
          <SorryNoAddOptionModal />
          <ButtonToolbar className="my-5">
            <CancelSaveModal id={this.state.id} />
            <ConfirmSaveModal id={this.state.id} />
          </ButtonToolbar>
        </Container>
      </div>
    );
  }
}

export default EditItemDetails;
