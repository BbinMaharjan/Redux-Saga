import axios from "axios";

export function requestGetUser() {
  return axios.request({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/users",
  });
}

export function requsetGetPosts() {
  return axios.request({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/posts",
  });
}
