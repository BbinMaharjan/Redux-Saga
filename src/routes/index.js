import React from "react";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../components/organisms/header/Header";
import Home from "../components/pages/home/Home";
import Posts from "../components/pages/posts/Posts";

const ProtectedRoutes = () => {
  return (
    <Router>
      <Header />
      <div className="container p-6 mt-2">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/posts" component={Posts} />
        </Switch>
      </div>
    </Router>
  );
};

export default ProtectedRoutes;
