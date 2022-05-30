import { Card, Spinner } from "react-bootstrap";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostsRequest } from "../../../redux/action/posts";
const Posts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsRequest());
  }, [dispatch]);

  const { posts, loading, error } = useSelector((state) => state.posts);

  return (
    <div>
      <h1>This Is All User posts</h1>
      {posts && (
        <div>
          {loading ? (
            <Spinner animation="border" variant="success" />
          ) : error ? (
            <div>Error</div>
          ) : (
            posts?.map((todo, index) => {
              return (
                <Card key={todo.id} className="m-4">
                  <Card.Header>{todo.title}</Card.Header>
                  <Card.Body>
                    <Card.Title>{todo.userId}</Card.Title>
                    <Card.Text>{todo.body}</Card.Text>
                  </Card.Body>
                </Card>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};

export default Posts;
