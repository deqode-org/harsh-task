import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";

const App = () => (
  <Router>
    <Route path="/" component={Dashboard} />
  </Router>
);

export default App;
