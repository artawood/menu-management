import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  ButtonToolbar,
  Table,
  InputGroup,
  FormControl
} from "react-bootstrap";
//Component
import EditModifierList from "../../components/EditModifierList";
import CancelSaveModal from "../../components/Modals/CancelSaveModal";
import ConfirmSaveModal from "../../components/Modals/ConfirmSaveModal";
import GoToDashboardWithOutSavingModal from "../../components/Modals/GoToDashboardWithOutSavingModal";
import SorryNoAddOptionModal from "../../components/Modals/SorryNoAddOptionModal";

import "./EditItemDetails.css";

//dummy data
import data from "../../models/data.json";

class EditItemDetails extends Component {
  state = {
    item: data.menu.item[0],
    itemName: data.menu.item[0].name,
    modifiers: [],
    EditItemName: "",
    EditItemPrice: "",
    EditItemCategory: "",
    EditItemDescription: "",
    id: "",
    sectionList: data.menu.section
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
      EditItemCategory: data.menu.item[id].section,
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
    this.setState({ modifiers: modifier });
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
          <Row className="pt-4">
            <Col md="10">
              <Row>
                <Col md="3">
                  <img
                    className="item-detail-image"
                    src={
                      this.state.item.imgURL
                        ? this.state.item.imgURL
                        : "icon-camera.svg"
                    }
                    alt={this.state.item.name}
                  />
                </Col>
                <Col md="9" className="pl-5">
                  <h2 className="item-detail-header">Item Name</h2>
                  <InputGroup size="lg">
                    <FormControl
                      value={this.state.EditItemName}
                      name="EditItemName"
                      onChange={this.handleInputChange}
                      placeholder="item name"
                      aria-label="itemName"
                    />
                  </InputGroup>
                  <Row className="pt-4">
                    <Col xs="6">
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
                    </Col>
                    <Col xs="6">
                      <div className="pt-2">
                        <h2 className="item-detail-header">Category</h2>
                        <InputGroup size="lg">
                          <FormControl
                            as="select"
                            value={this.state.EditItemCategory}
                            name="EditItemCategory"
                            onChange={this.handleInputChange}
                            placeholder="item category"
                            aria-label="itemCategory"
                          >
                            <option>{this.state.EditItemCategory}</option>
                            {this.state.sectionList.map(section => (
                              <option>{section}</option>
                            ))}
                          </FormControl>
                        </InputGroup>
                      </div>
                    </Col>
                  </Row>

                  <div className="pt-4">
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
            <Col md="2" />
          </Row>
          <h2 className="option-text pt-5 pb-2">Options</h2>
          <Table bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Modifier Price</th>
                <th>Modifier Group Name</th>
                <th>Modifier Group Min</th>
                <th>Modifier Group Max</th>
                <th>Available</th>
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
