import React from "react";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ViewerPDF from "./ViewerPDF";
const App = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/">
          <div>
            <a target="_blank" href="/home">
              طباعة
            </a>
          </div>
        </Route>
        <Route path="/home">
          <ViewerPDF />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
