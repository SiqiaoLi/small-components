import GlobalStyles from "./components/GlobalStyles";
import Home from "./pages/Home";
import ChatApp from "./pages/ChatApp";
import SideNav from "./components/SideNav";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyles />
        <SideNav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/chat" component={ChatApp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
