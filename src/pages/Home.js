import React, { useEffect } from "react";
import { Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/action/user";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  const user = useSelector((state) => state.user.user);
  return (
    <div>
      {user && (
        <div>
          {user.map((data) => {
            return (
              <Alert key={data.id} variant="danger">
                {data.name}
              </Alert>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
