import { Alert } from "bootstrap";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostList } from "../../../redux/action/posts";
const Posts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostList());
  }, [dispatch]);

  const { postsList, loading } = useSelector(({ posts }) => posts);
  console.log("========", postsList);
  return (
    <div>
      <h1>This IS All User posts</h1>
      {postsList && (
        <div>
          {postsList.map((data) => {
            return (
              <Alert key={data.id} variant="primary">
                {data.name}
              </Alert>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Posts;
