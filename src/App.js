import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Footer from "./pages/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Works" component={Home} />
        </Switch>
      </BrowserRouter>

    </>
  );
}

export default App;
