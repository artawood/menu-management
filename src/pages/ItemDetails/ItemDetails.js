import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ItemDetails.css";
//Layout
import Header from "../../components/Header";

//Bootstrap Components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

//Component
import ModifierList from "../../components/ModifierList";

//dummy data
import data from "../../models/data.json";

class ItemDetails extends Component {
  state = {
    item: data.menu.item[0]
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    let id = this.props.match.params.id;
    this.setState({ item: data.menu.item[id] });
  };

  render() {
    return (
      <div className="item-detail-page">
        <Header />
        <Container>
          {/* Navigation and Timestamp */}
          <Row className="pb-4">
            <Col md="8">
              <Link className="back-to-dashboard" to="/">
                <h4>&lt; Back to Dashboard</h4>
              </Link>
            </Col>
            <Col md="4">
              <p className="text-muted float-right">Timestamp</p>
            </Col>
          </Row>
          {/* Item Image and details */}
          <Row>
            <Col md="8">
              <Row>
                <Col md="3">
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
                <Col md="9">
                  <h1 className="item-name">{this.state.item.name}</h1>
                  <div className="pt-2">
                    <h2 className="item-detail-header">Price</h2>
                    <p className="price text-muted">{this.state.item.price}</p>
                  </div>
                  <div className="pt-2">
                    <h4 className="item-detail-header">Description</h4>
                    <p className="item-description">
                      {this.state.item.description}
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
            {/* Edit Button */}
            <Col md="4">
              {/* <SorryNoEditModal /> */}
              <Link to={"/edit/itemdetails/" + this.state.item.id}>
                <Button
                  className="edit-btn float-right"
                  variant="outline-secondary"
                >
                  Edit
                </Button>
              </Link>
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
            {this.state.item.modifier.map(modifier => (
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
              />
            ))}
          </Table>
        </Container>
      </div>
    );
  }
}

export default ItemDetails;
