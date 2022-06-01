import React from "react";

const ProductDetail = (props) => {
  return (
    <div className="ui placeholder segment">
      <div className="ui two column stackable center aligned grid">
        <div className="ui vertical divider">AND</div>
        <div className="middle aligned row">
          <div className="column lp">
            <img className="ui fluid image" src={props.Image} />
          </div>
          <div className="column rp">
            <h1>{props.Title}</h1>
            <h2>
              <a className="ui teal tag label">${props.Price}</a>
            </h2>
            <h3 className="ui brown block header">{props.Category}</h3>
            <p>{props.Description}</p>
            <div className="ui vertical animated button" tabIndex="0">
              <div className="hidden content">
                <i className="shop icon"></i>
              </div>
              <div className="visible content">Add to Cart</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
