import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./ItemDetails.css"
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

  state = {
    item: data.menu.item[0]
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    let id = this.props.match.params.id;
    this.setState({ item: data.menu.item[id]});
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
                  <img className="item-detail-image" src={this.state.item.imgURL ? this.state.item.imgURL : "https://imbindonesia.com/images/placeholder/camera.jpg"}/>
                </Col>
                <Col md="9">
                  <h2>{this.state.item.name}</h2>
                  <div>
                    <h3>Price</h3>
                    <p>{this.state.item.price}</p>
                  </div>
                  <div>
                    <h3>Description</h3>
                    <p>{this.state.item.description}</p>
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
            {this.state.item.modifier.map(modifier =>
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