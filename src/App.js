import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./custom.css";

// Layout Components
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";

//Pages
import Dashboard from "./pages/Dashboard";
import ItemDetails from "./pages/ItemDetails";
import EditItemDetails from "./pages/EditItemDetails";

// Test Components

const App = () => (
  <Router onUpdate={() => window.scrollTo(0, 0)}>
    <ScrollToTop>
      <Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        {/* For testing */}
        <Route exact path="/itemdetails/" component={ItemDetails} />
        <Route exact path="/itemdetails/:id" component={ItemDetails} />
        <Route exact path="/edit/itemdetails/" component={EditItemDetails} />
        <Route exact path="/edit/itemdetails/:id" component={EditItemDetails} />
        <Route
          exact
          path="/survey"
          component={() => {
            window.location = "https://forms.gle/g52s3vPcjyBSTi1P8";
            return null;
          }}
        />
      </Switch>
    </ScrollToTop>
  </Router>
);

export default App;
