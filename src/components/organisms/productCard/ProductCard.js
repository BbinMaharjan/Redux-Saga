import React from "react";

import { Link } from "react-router-dom";

import { BiLike, BiCartAlt } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";

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
        <span className="container">
          <strong>Category :</strong>
          {data.category}
        </span>
      </div>
      <strong className="container">Price: $ {data.price}</strong>
      <div className="container d-flex justify-content-around m-2">
        <BiLike color="green" size="20" />
        <BiCartAlt color="green" size="20" />
        <AiOutlineStar color="green" size="20" />
      </div>
    </div>
  );
};

export default ProductCard;
