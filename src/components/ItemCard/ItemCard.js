import React from 'react';
import { Link } from "react-router-dom";

// Bootstrap
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Custom CSS
import './ItemCard.css';

const ItemCard = props => (
  <Card className="item-card">
    <Row>
      <Col md={props.image ? "7" : "12"}>
        <Card.Body>
          <Card.Title>{props.name} <span className="edit-icon"><i class="fas fa-pen"></i></span></Card.Title>
          <Card.Title className="mt-2 text-muted">{props.price} <span className="edit-icon"><i class="fas fa-pen"></i></span></Card.Title>
            <Card.Text className="pt-2">
            {props.soldOut ?
              <p className="itemSoldOutBtn">
                <span className="soldOutToggle mr-2 isSoldOut"><i className="fas fa-toggle-on"></i></span>
                Sold Out
              </p> : 
              <p className="itemSoldOutBtn text-muted">
                <span className="soldOutToggle mr-2"><i className="fas fa-toggle-off"></i></span>
                Sold Out
              </p>}
            </Card.Text>
          <Card.Text>
            <Row>
              <Col xs="9"><Link className="see-details" to={"/itemdetails/" + props.id}>See Details</Link></Col>
              <Col><span onClick={() => { if (window.confirm("Are you sure you want to delete " + props.name + "?")) props.removeItem(props.id, props.name)}} className="text-muted"><i class="fas fa-trash-alt"></i></span></Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Col>
      {props.image ? <Col md="5" className="item-img-overflow">
        <Card.Img className="item-img" variant="right" src={props.image} />
      </Col> : <div></div>}
      
    </Row>
  </Card>
)

export default ItemCard;