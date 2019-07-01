import React from "react";
import Moment from "react-moment";
import { Row, Col, Jumbotron, Nav } from "react-bootstrap";
import LocationSelector from "../LocationSelector";
import "./Hero.css";

import data from "../../models/data2.json";

const Hero = props => (
  <Jumbotron className="hero-clear pb-3">
    <Row>
      <Col md="8" className="pb-3">
        <h1>Menu Management</h1>
      </Col>
      <Col md="4">
        <p>
          Last pushed{" "}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{props.datePushed}</Moment>
        </p>
      </Col>
    </Row>
    <LocationSelector class="py-5" />
    <div class="dropdown-divider py-3" />
    <Nav
      activeKey="all"
      onSelect={selectedKey => alert(`filter ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link
          className={
            props.showAll
              ? "isActive filter-item category-text first-nav"
              : "filter-item category-text first-nav"
          }
          onClick={props.renderAll}
        >
          All
        </Nav.Link>
      </Nav.Item>
      {/* dynamic rendering of menu titles */}
      {props.data.map(menu => (
        <Nav.Item>
          <Nav.Link
            className={
              props.showAll === false && props.showBurgers === true
                ? "isActive filter-item category-text"
                : "filter-item category-text"
            }
            onClick={() => props.renderSelected(menu.title, menu.menu_items)}
          >
            {menu.title}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  </Jumbotron>
);

// class Hero extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data: props.data,
//       renderSelected: props.renderSelected,
//       showAll: props.showAll,
//       renderAll: props.renderAll,
//       showBurgers: props.showBurgers,
//       renderBurgers: props.renderSelected,
//       datePushed: props.datePushed
//     };
//   }

//   render() {
//     return (
//       <Jumbotron className="hero-clear pb-3">
//         <Row>
//           <Col md="8" className="pb-3">
//             <h1>Menu Management</h1>
//           </Col>
//           <Col md="4">
//             <p>
//               Last pushed{" "}
//               <Moment format="MMMM Do YYYY, h:mm:ss a">
//                 {this.state.datePushed}
//               </Moment>
//             </p>
//           </Col>
//         </Row>
//         <LocationSelector class="py-5" />
//         <div class="dropdown-divider py-3" />
//         <Nav
//           activeKey="all"
//           onSelect={selectedKey => alert(`filter ${selectedKey}`)}
//         >
//           <Nav.Item>
//             <Nav.Link
//               className={
//                 this.state.showAll
//                   ? "isActive filter-item category-text first-nav"
//                   : "filter-item category-text first-nav"
//               }
//               onClick={this.state.renderAll}
//             >
//               All
//             </Nav.Link>
//           </Nav.Item>
//           {/* dynamic rendering of menu titles */}
//           {this.state.data.map(menu => (
//             <Nav.Item>
//               <Nav.Link
//                 className={
//                   this.state.showAll === false && this.showBurgers === true
//                     ? "isActive filter-item category-text"
//                     : "filter-item category-text"
//                 }
//                 // onClick={() => this.state.renderSelected(menu.title)}
//               >
//                 {menu.title}
//               </Nav.Link>
//             </Nav.Item>
//           ))}
//         </Nav>
//       </Jumbotron>
//     );
//   }
// }

export default Hero;
