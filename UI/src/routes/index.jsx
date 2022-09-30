import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Guide from "../pages/style-guide";
import School from "./School";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/styles" component={Guide} />
        <Route path="/school" component={School} />
      </Switch>
    </Router>
  );
};

export default Routes;
