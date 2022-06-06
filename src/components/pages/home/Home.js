import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProductsRequest } from "../../../redux/action/products";
import ProductCard from "../../organisms/productCard/ProductCard";

const Home = () => {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector(({ products }) => products);

  useEffect(() => {
    dispatch(getProductsRequest());
  }, [dispatch]);

  return (
    <div className="container d-flex flex-row flex-wrap justify-content-center">
      {loading ? (
        <Spinner
          className="justify-content-center align-items-center"
          animation="border"
          variant="success"
        />
      ) : error ? (
        <div>Error</div>
      ) : (
        products?.map((data) => {
          return (
            <div className="m-2">
              <ProductCard data={data} />
            </div>
          );
        })
      )}
    </div>
  );
};

export default Home;
