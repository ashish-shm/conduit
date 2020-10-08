import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import Register from "./components/Register";
import DashBoard from "./components/DashBoard";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={Register} exact />
        <Route path="/dashboard" component={DashBoard} exact />
      </Switch>
    </main>
  );
}

export default App;
