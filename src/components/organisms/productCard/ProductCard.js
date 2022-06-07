import React from "react";

import { Link } from "react-router-dom";

import { BiLike } from "react-icons/bi";
import "./productCard.css";

const ProductCard = ({ data }) => {
  return (
    <div className="card">
      <div className="card-upper">
        <div className="card-image">
          <Link to={`/product/${data.id}`}>
            <img src={data.image} alt="product" />
          </Link>
        </div>
        <div>{data.title}</div>
      </div>
      <div className="container d-flex justify-content-between">
        <strong>Price: $ {data.price}</strong>
        <BiLike color="green" size="25" />
      </div>
    </div>
  );
};

export default ProductCard;
