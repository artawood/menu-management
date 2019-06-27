import React from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";
import SoldOutSwitch from "../ToggleSoldOut";
//Uncomment if using thes features
// import EditItemNameModal from "../Modals/EditItemNameModal";
// import EditItemPriceModal from "../Modals/EditItemPriceModal";
// import RemoveItemModal from "../Modals/RemoveItemModal";

//Custom CSS
import "./ItemCard.css";

class ItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      key: props.id,
      title: props.title,
      name: props.name,
      price: props.price,
      section: props.section,
      image: props.image,
      soldOut: props.soldOut,
      soldOutClass: ""
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSoldOut() {
    {
      this.state.soldOut
        ? this.setState({
            soldOut: false,
            soldOutClass: ""
          })
        : this.setState({
            soldOut: true,
            soldOutClass: "soldOut"
          });
    }
  }
  render() {
    return (
      <Card className="item-card">
        <Card.Body>
          <Row className="pl-3 pb-1">
            <div className="item-name-card pr-2">{this.state.name}</div>
          </Row>
          <Row>
            <Col xs={this.state.image ? "6" : "12"}>
              <Row className="pl-3 pt-1 pb-1">
                <div className="item-price-card pr-2">$ {this.state.price}</div>
              </Row>
              <Card.Text className="mt-3">
                {/* {props.soldOut ?
                <p className="itemSoldOutBtn">
                  <span className="soldOutToggle mr-2 isSoldOut"><i className="fas fa-toggle-on"></i></span>
                  Sold Out
                </p> : 
                <p className="itemSoldOutBtn text-muted">
                  <span className="soldOutToggle mr-2"><i className="fas fa-toggle-off"></i></span>
                  Sold Out
                </p>} */}
                <div className="d-flex">
                  <SoldOutSwitch className="pr-2" />
                </div>
              </Card.Text>
            </Col>
            {this.state.image ? (
              <Col md="6" className="item-img-overflow">
                <Card.Img
                  className="item-img mt-2"
                  variant="right"
                  src={this.state.image}
                />
              </Col>
            ) : (
              <div />
            )}
          </Row>
        </Card.Body>
        <Card.Footer>
          <Row>
            <Col xs="5">
              <Link
                className="see-details"
                to={"/itemdetails/" + this.state.title + "/" + this.state.id}
              >
                See Details
              </Link>
            </Col>
            <Col xs="7" />
          </Row>
        </Card.Footer>
      </Card>
    );
  }
}

export default ItemCard;
