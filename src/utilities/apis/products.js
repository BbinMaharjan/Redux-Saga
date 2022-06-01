import axios from "axios";

export function requestGetProducts() {
  return axios.request({
    method: "get",
    url: "https://fakestoreapi.com/products",
  });
}

export const requestGetProductDetails = async (id) => {
  const response = await axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((response) => response.data);
  return response;
};
