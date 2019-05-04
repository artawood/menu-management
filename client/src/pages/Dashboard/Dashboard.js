import React, { Component } from 'react';

// Layout Components
import Header from "../../components/Header";
import Hero from '../../components/Hero';
import Sidebar from '../../components/Sidebar';
import ItemCard from '../../components/ItemCard';

// Bootstrap imports
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


// Data
import data from '../../models/data.json';

class App extends Component {

  state = {
    burgers: [],
    dogs: []
  };

  componentDidMount() {
    this.renderSections();
  }

  renderSections = () => {
    const burgers = data.menu.item.filter( item => item.section == "Burgers");
    const dogs = data.menu.item.filter( item => item.section == "Dogs");
    this.setState({ 
      burgers: burgers,
      dogs: dogs
    });
  };

  //todo create function for soldOut Button
  
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Container fluid>
          <Row className="shift-down">
            <Col md="2">
              <Sidebar></Sidebar>
            </Col>
            <Col md="10">
            <Hero></Hero>
              <Container>
                <h3>Burgers</h3>
                <Row>
                  {this.state.burgers.map(burger => (
                    <Col md="6">
                      <ItemCard
                      id={burger.id}
                      key={burger.id}
                      name={burger.name}
                      price={burger.price}
                      image={burger.imgURL}
                      soldOut={burger.soldOut}
                      modifier={burger.modifier}
                      />
                    </Col>
                  ))}
                </Row>
                <h3>Dogs</h3>
                <Row>
                  {this.state.dogs.map(dog => (
                    <Col md="6">
                      <ItemCard
                      id={dog.id}
                      key={dog.id}
                      name={dog.name}
                      price={dog.price}
                      image={dog.imgURL}
                      soldOut={dog.soldOut}
                      modifier={dog.modifier}
                      />
                    </Col>
                  ))}
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;