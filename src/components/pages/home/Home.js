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
    <div className="ui grid container">
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
            <div>
              <ProductCard
                key={data.id}
                Id={data.id}
                Image={data.image}
                Title={data.title}
                Price={data.price}
                Category={data.category}
              />
            </div>
          );
        })
      )}
    </div>
  );
};

export default Home;
