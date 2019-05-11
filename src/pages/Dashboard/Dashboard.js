import React, { Component } from "react";

// Layout Components
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Sidebar from "../../components/Sidebar";
import ItemCard from "../../components/ItemCard";

// Bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Data
import data from "../../models/data.json";

class App extends Component {
  state = {
    burgers: [],
    dogs: [],
    sandwiches: [],
    fries: [],
    drinks: [],
    shakes: [],
    showAll: true,
    showBurgers: true,
    showDogs: true,
    showSandwiches: true,
    showFries: true,
    showDrinks: true,
    showShakes: true,
    isSoldOut: false
  };

  componentDidMount() {
    this.loadData();
  }

  //functions
  loadData = () => {
    let burgers = data.menu.item.filter(item => item.section == "Burgers");
    let dogs = data.menu.item.filter(item => item.section == "Dogs");
    let sandwiches = data.menu.item.filter(
      item => item.section == "Sandwiches"
    );
    let fries = data.menu.item.filter(item => item.section == "Fries");
    let drinks = data.menu.item.filter(item => item.section == "Drinks");
    let shakes = data.menu.item.filter(item => item.section == "Shakes");
    this.setState({
      burgers: burgers,
      dogs: dogs,
      sandwiches: sandwiches,
      fries: fries,
      drinks: drinks,
      shakes: shakes,
      showAll: true,
      showBurgers: true,
      showDogs: true,
      showSandwiches: true,
      showFries: true,
      showDrinks: true,
      showShakes: true
    });
  };

  renderAll = () => {
    this.setState({
      showAll: true,
      showBurgers: true,
      showDogs: true,
      showSandwiches: true,
      showDrinks: true,
      showFries: true,
      showShakes: true
    });
  };

  renderBurgers = () => {
    this.setState({
      showAll: false,
      showBurgers: true,
      showDogs: false,
      showSandwiches: false,
      showFries: false,
      showDrinks: false,
      showShakes: false
    });
  };

  renderDogs = () => {
    this.setState({
      showAll: false,
      showBurgers: false,
      showDogs: true,
      showSandwiches: false,
      showFries: false,
      showDrinks: false,
      showShakes: false
    });
  };

  renderSandwiches = () => {
    this.setState({
      showAll: false,
      showBurgers: false,
      showDogs: false,
      showSandwiches: true,
      showFries: false,
      showDrinks: false,
      showShakes: false
    });
  };

  renderFries = () => {
    this.setState({
      showAll: false,
      showBurgers: false,
      showDogs: false,
      showSandwiches: false,
      showFries: true,
      showDrinks: false,
      showShakes: false
    });
  };

  renderDrinks = () => {
    this.setState({
      showAll: false,
      showBurgers: false,
      showDogs: false,
      showSandwiches: false,
      showFries: false,
      showDrinks: true,
      showShakes: false
    });
  };

  renderShakes = () => {
    this.setState({
      showAll: false,
      showBurgers: false,
      showDogs: false,
      showSandwiches: false,
      showFries: false,
      showDrinks: false,
      showShakes: true
    });
  };

  removeItem = id => {
    let burgers = data.menu.item.filter(
      item => item.section === "Burgers" && item.id !== id
    );
    let dogs = data.menu.item.filter(
      item => item.section === "Dogs" && item.id !== id
    );
    let sandwiches = data.menu.item.filter(
      item => item.section === "Sandwiches" && item.id !== id
    );
    let fries = data.menu.item.filter(
      item => item.section === "Fries" && item.id !== id
    );
    let drinks = data.menu.item.filter(
      item => item.section === "Drinks" && item.id !== id
    );
    let shakes = data.menu.item.filter(
      item => item.section === "Shakes" && item.id !== id
    );
    this.setState({
      burgers: burgers,
      dogs: dogs,
      sandwiches: sandwiches,
      fries: fries,
      drinks: drinks,
      shakes: shakes
    });
  };

  //todo create function for soldOut Button

  render() {
    return (
      <div className="App">
        <Header />
        <Container fluid>
          <Row className="shift-down">
            <Col md="3">
              <Sidebar />
            </Col>
            <Col md="9">
              <Hero
                renderAll={this.renderAll}
                renderBurgers={this.renderBurgers}
                renderDogs={this.renderDogs}
                renderSandwiches={this.renderSandwiches}
                renderFries={this.renderFries}
                renderDrinks={this.renderDrinks}
                renderShakes={this.renderShakes}
                showAll={this.state.showAll}
                showBurgers={this.state.showBurgers}
                showDogs={this.state.showDogs}
                showSandwiches={this.state.showSandwiches}
                showFries={this.state.showFries}
                showDrinks={this.state.showDrinks}
                showShakes={this.state.showShakes}
              />
              <Container className="px-4 pb-5">
                {this.state.showBurgers ? (
                  <div>
                    <h4>BURGERS</h4>
                    <Row className="pb-5">
                      {this.state.burgers.map(burger => (
                        <Col>
                          <ItemCard
                            removeItem={this.removeItem}
                            id={burger.id}
                            key={burger.id}
                            name={burger.name}
                            price={burger.price}
                            section={burger.section}
                            image={burger.imgURL}
                            soldOut={burger.soldOut}
                            modifier={burger.modifier}
                          />
                        </Col>
                      ))}
                    </Row>
                  </div>
                ) : (
                  <div />
                )}
                {this.state.showDogs ? (
                  <div>
                    <h4>DOGS</h4>
                    <Row className="pb-5">
                      {this.state.dogs.map(dog => (
                        <Col>
                          <ItemCard
                            removeItem={this.removeItem}
                            id={dog.id}
                            key={dog.id}
                            name={dog.name}
                            price={dog.price}
                            section={dog.section}
                            image={dog.imgURL}
                            soldOut={dog.soldOut}
                            modifier={dog.modifier}
                          />
                        </Col>
                      ))}
                    </Row>
                  </div>
                ) : (
                  <div />
                )}
                {this.state.showSandwiches ? (
                  <div>
                    <h4>Sandwiches</h4>
                    <Row className="pb-5">
                      {this.state.sandwiches.map(sandwich => (
                        <Col>
                          <ItemCard
                            removeItem={this.removeItem}
                            id={sandwich.id}
                            key={sandwich.id}
                            name={sandwich.name}
                            price={sandwich.price}
                            section={sandwich.section}
                            image={sandwich.imgURL}
                            soldOut={sandwich.soldOut}
                            modifier={sandwich.modifier}
                          />
                        </Col>
                      ))}
                    </Row>
                  </div>
                ) : (
                  <div />
                )}
                {this.state.showFries ? (
                  <div>
                    <h4>Fries</h4>
                    <Row className="pb-5">
                      {this.state.fries.map(fries => (
                        <Col>
                          <ItemCard
                            removeItem={this.removeItem}
                            id={fries.id}
                            key={fries.id}
                            name={fries.name}
                            price={fries.price}
                            section={fries.section}
                            image={fries.imgURL}
                            soldOut={fries.soldOut}
                            modifier={fries.modifier}
                          />
                        </Col>
                      ))}
                    </Row>
                  </div>
                ) : (
                  <div />
                )}
                {this.state.showDrinks ? (
                  <div>
                    <h4>Drinks</h4>
                    <Row className="pb-5">
                      {this.state.drinks.map(drink => (
                        <Col>
                          <ItemCard
                            removeItem={this.removeItem}
                            id={drink.id}
                            key={drink.id}
                            name={drink.name}
                            price={drink.price}
                            section={drink.section}
                            image={drink.imgURL}
                            soldOut={drink.soldOut}
                            modifier={drink.modifier}
                          />
                        </Col>
                      ))}
                    </Row>
                  </div>
                ) : (
                  <div />
                )}
                {this.state.showShakes ? (
                  <div>
                    <h4>Milkshakes</h4>
                    <Row>
                      {this.state.shakes.map(shake => (
                        <Col>
                          <ItemCard
                            removeItem={this.removeItem}
                            id={shake.id}
                            key={shake.id}
                            name={shake.name}
                            price={shake.price}
                            section={shake.section}
                            image={shake.imgURL}
                            soldOut={shake.soldOut}
                            modifier={shake.modifier}
                          />
                        </Col>
                      ))}
                    </Row>
                  </div>
                ) : (
                  <div />
                )}
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
