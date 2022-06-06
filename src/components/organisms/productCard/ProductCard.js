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
      <div className="card-lower">
        <div>Price: $ {data.price}</div>
        <div className="card-button-container">
          <button className="card-add-to-cart-btn">Add to Cart</button>
          <BiLike color="green" size="25" />
        </div>
      </div>
    </div>

    // <div className="four wide column">
    //   <Link to={`/product/${data.Id}`}>
    //     <div className="ui link cards">
    //       <div className="card">
    //         <div className="image">
    //           <img src={data.Image} alt={data.Title} />
    //         </div>
    //         <div className="content">
    //           <div className="header">{data.Title}</div>
    //           <div className="meta price">$ {data.Price}</div>
    //           <div className="meta">{data.Category}</div>
    //         </div>
    //       </div>
    //     </div>
    //   </Link>
    // </div>
  );
};

export default ProductCard;
