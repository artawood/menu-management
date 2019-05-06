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
    dogs: [],
    isSoldOut: false
  };

  componentDidMount() {
    this.renderSections();
  }

  //functions
  renderSections = () => {
    let burgers = data.menu.item.filter( item => item.section == "Burgers");
    let dogs = data.menu.item.filter( item => item.section == "Dogs");
    this.setState({ 
      burgers: burgers,
      dogs: dogs
    });
  };

  removeItem = (id) => {
    let burgers = data.menu.item.filter( item => item.id !== id);
    let dogs = data.menu.item.filter( item => item.id !== id);
    this.setState({ 
      burgers: burgers,
      dogs: dogs
    });
  }

  //todo create function for soldOut Button

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Container fluid>
          <Row className="shift-down">
            <Col md="3">
              <Sidebar></Sidebar>
            </Col>
            <Col md="9">
              <Hero></Hero>
              <Container className="px-4">
                <h4 className="pt-4">BURGERS</h4>
                <Row>
                  {this.state.burgers.map(burger => (
                    <Col>
                      <ItemCard
                      removeItem={this.removeItem}
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
                <h4 className="mt-5">DOGS</h4>
                <Row>
                  {this.state.dogs.map(dog => (
                    <Col>
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