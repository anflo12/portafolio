import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Works from "./pages/Works";

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/works" component={Works} />
      <Route exact path="/contact" component={Contact} />
    </>
  );
}

export default App;
