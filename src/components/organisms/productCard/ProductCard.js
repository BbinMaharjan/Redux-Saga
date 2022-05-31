import React from "react";
import { Card } from "react-bootstrap";
import { FiStar, FiShoppingBag } from "react-icons/fi";
import { BiMoney } from "react-icons/bi";
const ProductCard = (props) => {
  return (
    <div className="container m-2">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" className="container p-2" src={props.Image} />
        <Card.Body>
          <Card.Title>{props.Title}</Card.Title>
          <Card.Text>
            $ {props.Price} <BiMoney color="green" />
          </Card.Text>
          <spam>
            Rate : {props.Rate} <FiStar color="red" />
          </spam>
          <spam>
            Count : {props.Count} <FiShoppingBag color="blue" />
          </spam>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
