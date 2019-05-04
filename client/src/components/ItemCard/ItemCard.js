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
          <Card.Subtitle className="mt-2 text-muted">{props.price} <span className="edit-icon"><i class="fas fa-pen"></i></span></Card.Subtitle>
          {props.soldOut ? 
            <Card.Text>
              <p className="itemSoldOutBtn">
                <span className="isSoldOut"><i className="fas fa-toggle-on"></i></span>
                <span className="">Sold Out</span>
              </p>
            </Card.Text> : 
            <Card.Text>
              <p className="itemSoldOutBtn">
                <i className="fas fa-toggle-off"></i>
                <span className="text-muted">Sold Out</span>
              </p>
            </Card.Text>}
          <Card.Text>
            <Row>
              <Col xs="9"><Link to={"/itemdetails/" + props.id}>See Details</Link></Col>
              <Col><i class="fas fa-trash-alt"></i></Col>
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