import React, { useEffect, useState } from "react";
import ProductDetail from "../../molecules/ProductDetails";
import { axios } from "axios";
import { useParams } from "react-router-dom";
import { requestGetProductDetails } from "../../../utilities/apis/products";

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const id = useParams();

  const fetchProductDetail = async (id) => {
    console.log("===", id);
    const response = await requestGetProductDetails(id);
    console.log("======", response);
    setProducts(response.data);
  };
  useEffect(() => {
    fetchProductDetail(id);
  }, [id]);

  return (
    <div className="ui grid container">
      <ProductDetail
        Image={products.image}
        Title={products.title}
        Price={products.price}
        Category={products.category}
        Description={products.description}
      />
    </div>
  );
};

export default ProductDetails;
