import React from "react";
import { Button, Image } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { BsBagCheckFill } from "react-icons/bs";

const SingleProductPage = ({ data }) => {
  return (
    <div className="container d-flex flex-row justify-content-center align-self-center m-5">
      <div className="container sm ">
        <Image
          src={data.image}
          className=" img-fluid img-thumbnail float-left"
          alt="products"
        />
      </div>
      <div className="m-3">
        <div className="row">
          <strong className="col">Title :</strong>
          <spam className="col-10">{data.title}</spam>
        </div>
        <div className="row">
          <strong className="col">Category :</strong>
          <spam className="col-10">{data.category}</spam>
        </div>
        <div className="row">
          <strong className="col">Description :</strong>
          <spam className="col-10 ">{data.description}</spam>
        </div>
        <div className="row">
          <strong className="col">Price :</strong>
          <spam className="col-10"> $ {data.price}</spam>
        </div>
        <div className="row">
          <strong className="col">Rate :</strong>
          <spam className="col-10">
            {data.rating?.rate} <AiFillStar color="orange" size="20" />
          </spam>
        </div>
        <div className="row">
          <strong className="col">Count :</strong>
          <spam className="col-10">
            {data.rating?.count} <BsBagCheckFill color="green" size="20" />
          </spam>
        </div>
        <div className="m-5">
          <Button>Add To Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
