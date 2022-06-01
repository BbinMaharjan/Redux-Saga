import React from "react";

import { Link } from "react-router-dom";

const ProductCard = (props) => {
  return (
    <div className="four wide column">
      <Link to={`/product/${props.Id}`}>
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={props.Image} alt={props.Title} />
            </div>
            <div className="content">
              <div className="header">{props.Title}</div>
              <div className="meta price">$ {props.Price}</div>
              <div className="meta">{props.Category}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
