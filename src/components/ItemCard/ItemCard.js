import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as DeleteIcon } from "../../models/images/icon-delete.svg";

// Bootstrap
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Components
import SoldOutSwitch from "../ToggleSwitch";
import EditItemNameModal from "../Modals/EditItemNameModal";
import EditItemPriceModal from "../Modals/EditItemPriceModal";
import RemoveItemModal from "../Modals/RemoveItemModal";

//Custom CSS
import "./ItemCard.css";

class ItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      key: props.id,
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
            <EditItemNameModal className="pt-1" name={this.state.name} />
          </Row>
          <Row>
            <Col xs={this.state.image ? "6" : "12"}>
              <Row className="pl-3 pt-1 pb-1">
                <div className="item-price-card pr-2">$ {this.state.price}</div>
                <EditItemPriceModal price={this.state.price} />
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
                  <span>Sold Out</span>
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
                to={"/itemdetails/" + this.state.id}
              >
                See Details
              </Link>
            </Col>
            <Col xs="7">
              <span
                onClick={() => {
                  if (
                    window.confirm(
                      "Are you sure you want to delete " + this.state.name + "?"
                    )
                  )
                    this.props.removeItem(this.state.id, this.state.name);
                }}
                className="text-muted delete-icon"
              >
                <DeleteIcon />
                {/* <RemoveItemModal
                id={this.state.id}
                name={this.state.name}
                removeItem={this.props.removeItem()}
              /> */}
              </span>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    );
  }
}

export default ItemCard;
