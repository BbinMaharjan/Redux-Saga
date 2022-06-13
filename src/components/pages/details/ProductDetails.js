import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailsRequest } from "../../../redux/action/products";
import SingleProductPage from "../../molecules/SingleProductPage";
import { Spinner } from "react-bootstrap";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { productDetails, loading } = useSelector(({ products }) => products);

  useEffect(() => {
    dispatch(getProductDetailsRequest(id));
  }, [dispatch, id]);

  return (
    <div className="container justify-content-center align-items-center">
      {loading ? (
        <Spinner
          className="justify-content-center align-items-center"
          animation="border"
          variant="danger"
        />
      ) : (
        <SingleProductPage data={productDetails} />
      )}
    </div>
  );
};

export default ProductDetails;
