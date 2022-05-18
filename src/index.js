// React Required
import React, { Component } from "react";
import ReactDOM from "react-dom";

// Create Import File
import "./index.scss";

import PageScrollTop from "./component/PageScrollTop";

// Home layout
// import Demo from './page-demo/Demo';
// import MainDemo from "./home/MainDemo";
import Login from "./login/Login3";

// Dark Home Layout
// import DarkMainDemo from "./dark/MainDemo";
import DarkPortfolioLanding from "./dark/PortfolioLanding";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <PageScrollTop>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route
              path="/:loginType/:tokenId"
              component={DarkPortfolioLanding}
            />
            <Redirect from="*" to="/login" />
          </Switch>
        </PageScrollTop>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();
