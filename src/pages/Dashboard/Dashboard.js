import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Sidebar from "../../components/Sidebar";
import SidebarContent from "../../components/SidebarContent";
import ItemCard from "../../components/ItemCard";

// Data
import data from "../../models/data2.json";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      showAll: true,
      showBurgers: true,
      showDogs: true,
      showSandwiches: true,
      showFries: true,
      showDrinks: true,
      showShakes: true,
      isSoldOut: false,
      docked: true,
      transitions: true,
      datePushed: "May 20, 2019 15:00",
      menu_items: []
    };
    this.onSetSidebarDocked = this.onSetSidebarDocked.bind(this);
    this.pushTimeStamp = this.pushTimeStamp.bind(this);
  }

  onSetSidebarDocked() {
    if (this.state.docked) {
      this.setState({
        docked: false
      });
    } else {
      this.setState({
        docked: true
      });
    }
  }
  //functions

  pushTimeStamp = newTimeStamp => {
    this.setState({
      datePushed: newTimeStamp
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

  // renderSelected(menu_title) {
  //   //let menu_title = filter by menu_title, the map array of menu_items
  //   let menu_items = data.findIndex(i =>
  //     i.title === menu_title
  //     )
  //   this.setState({
  //     menu_items: menu_items
  //   })
  // }

  render() {
    const newTimeStamp = new Date().getTime();

    return (
      <div className="App">
        <Header toggleSidebar={this.onSetSidebarDocked} />
        <Sidebar
          sidebar={<SidebarContent pushTimeStamp={this.pushTimeStamp} />}
          docked={this.state.docked}
          pushTimeStamp={this.pushTimeStamp}
        >
          <Container fluid className="pt-5 pl-6">
            <Hero
              className="pb-5"
              renderAll={this.renderAll}
              datePushed={this.state.datePushed}
              data={this.data}
              renderSelected={this.renderSelected}
            />
            <div className="px-4 pb-5">
              {/* Render dynamic data onto dashboard */}
              {this.state.data.map(menu => (
                <div className="py-3">
                  <h4>{menu.title}</h4>
                  <Row>
                    {menu.menu_items.map(item => (
                      <Col>
                        <ItemCard
                          removeItem={this.removeItem}
                          id={item.id}
                          key={item.id}
                          title={menu.title}
                          name={item.name}
                          price={item.price}
                          soldOut={item.soldOut}
                        />
                      </Col>
                    ))}
                  </Row>
                </div>
              ))}
            </div>
          </Container>
        </Sidebar>
      </div>
    );
  }
}

export default Dashboard;
