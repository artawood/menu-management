import React from 'react';

// Bootstrap
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Custom CSS
import './ItemCard.css';

const ItemCard = props => (
  <Card className="item-card">
    <Row>
      <Col md="8">
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Price</Card.Subtitle>
          <Card.Text>
            {props.description}
          </Card.Text>
        </Card.Body>
      </Col>
      <Col md="4" className="item-img-overflow">
        <Card.Img className="item-img" variant="right" src={props.image} />
      </Col>
    </Row>
  </Card>
)

export default ItemCard;