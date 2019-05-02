import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./custom.css";

// Layout Components
import Header from "./components/Header";

//Pages
import Dashboard from "./pages/Dashboard";
import ItemDetails from "./pages/ItemDetails";

const App = () => (
  <Router>
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        {/* For testing */}
        <Route exact path="/itemdetails/" component={ItemDetails} />
        <Route exact path="/itemdetails/:id" component={ItemDetails} />
      </Switch>
    </div>
  </Router>
);


export default App;
