import React from "react";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../components/pages/home/Home";
import Posts from "../components/pages/posts/Posts";

const ProtectedRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route to="/home" component={Home} />
        <Route to="/posts" component={Posts} />
      </Switch>
    </Router>
  );
};

export default ProtectedRoutes;
