import React from "react";
import { Card, Button } from "react-bootstrap";

const SingleProductPage = ({ data }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={data.image} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <spam>{data.category}</spam>
        <Card.Text>{data.description}</Card.Text>
        <strong> Price : $ {data.price}</strong>
      </Card.Body>
      <Button variant="primary">Add To Cart</Button>
    </Card>
  );
};

export default SingleProductPage;
