import React, { Component } from 'react';
import "./custom.css";

// Layout Components
import Header from "./components/Header";
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';

// Bootstrap imports
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCard from './components/ItemCard';

// Data
import data from './models/data.json';

class App extends Component {

  state = {
    data
  };

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Row className="shift-down">
          <Col md="2">
            <Sidebar></Sidebar>
          </Col>
          <Col md="10">
          <Hero></Hero>
            <Container fluid>
              <Row>
                {this.state.data.menu.item.map(data => (
                  <Col md="4">
                    <ItemCard
                    id={data.id}
                    key={data.id}
                    name={data.name}
                    price={data.price}
                    image={data.imgURL}
                    soldOut={data.soldOut}
                    modifier={data.modifier}
                    />
                  </Col>
                ))}
              </Row>
            </Container>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
