import axios from "axios";

export function requestGetProducts() {
  return axios.request({
    method: "get",
    url: "https://fakestoreapi.com/products",
  });
}

export function requestGetProductDetails(id) {
  return axios.request({
    method: "get",
    url: `https://fakestoreapi.com/products/${id}`,
  });
}
