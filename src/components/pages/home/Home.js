import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProductsRequest } from "../../../redux/action/products";
import ProductCard from "../../organisms/productCard/ProductCard";

const Home = () => {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductsRequest());
  }, [dispatch]);

  return (
    <div>
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
            <ProductCard
              key={data.id}
              Image={data.image}
              Title={data.title}
              Price={data.price}
            />
          );
        })
      )}
    </div>
  );
};

export default Home;
