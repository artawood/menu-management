import React, { Component } from 'react';
import { Link } from "react-router-dom";

//Layout
import Header from "../../components/Header";

//Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

//Component
import ModifierList from '../../components/ModifierList';

//dummy data
import data from '../../models/data.json';

class ItemDetails extends Component {
  // Uncomment when ready to pull data from API
  // constructor(props){
  //   super(props);

  //   this.state = {
  //   name: this.props.name,
  //   price: this.props.price,
  //   description: this.props.description,
  //   imgURL: this.props.imgURL,
  //   modifiers: this.props.modifiers
  //   }
  // }

  state = {
    name: "Hamburger",
    price: "7.99",
    description: "two fresh patties grilled to perfection",
    imgURL: "https://www.itsacheckmate.com/wp-content/uploads/2019/04/hamburger.png",
    modifiers: data.menu.modifiers
  }
  

  render() {
    return (
      <div className="shift-down">
        <Header></Header>
        <Container>
          {/* Navigation and Timestamp */}
          <Row>
            <Col md="8">
            <Link to="/">
              <h2>&lt; Back to Dashboard</h2>
            </Link>
            </Col>
            <Col md="4">Timestamp</Col>
          </Row>
          {/* Item Image and details */}
          <Row>
            <Col md="8">
              <Row>
                <Col md="3">
                  <img src={this.state.imgURL}/>
                </Col>
                <Col md="9">
                  <h2>{this.state.name}</h2>
                  <div>
                    <h3>Price</h3>
                    <p>{this.state.price}</p>
                  </div>
                  <div>
                    <h3>Description</h3>
                    <p>{this.state.description}</p>
                  </div>
                </Col>
              </Row>
            </Col>
            {/* Edit Button */}
            <Col md="2">
              <Button variant="outline-secondary">Edit</Button>
            </Col>
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
              </tr>
            </thead>
            {this.state.modifiers.map(modifier =>
                <ModifierList
                id={modifier.id}
                key={modifier.id}
                name={modifier.name}
                calories={modifier.calories}
                groupName={modifier.groupName}
                groupMin={modifier.groupMin}
                groupMax={modifier.groupMax}
                price={modifier.price}
                soldOut={modifier.soldOut}
                />)}
          </Table>
        </Container>
      </div>
    )
  }
}

export default ItemDetails;