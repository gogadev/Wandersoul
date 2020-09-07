import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";

import Home from "./pages/home/Home";
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact";
import Subscribe from "./pages/subscribe/Subscribe";


import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/subscribe" component={Subscribe} />
      </Switch>
    </Router>
  );
};

export default App;
