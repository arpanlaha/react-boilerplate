import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./redux/configureStore";
import { App } from "./components";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter onUpdate={() => window.scrollTo(0, 0)} history={history}>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
