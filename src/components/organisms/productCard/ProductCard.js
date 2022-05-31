import React from "react";
import { Card } from "react-bootstrap";
const ProductCard = (props) => {
  return (
    <div className="container m-2">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" className="container p-2" src={props.Image} />
        <Card.Body>
          <Card.Title>{props.Title}</Card.Title>
          <Card.Text>$ {props.Price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
