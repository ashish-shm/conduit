import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import Register from "./components/Register";
import DashBoard from "./components/DashBoard";
import "semantic-ui-css/semantic.min.css";
import "./style.css";



function App() {
  // let [user,setUser] = useState(null)
  // let [loggedIn, setLoggedIn] = useState(false)

  let url = "https://mighty-oasis-08080.herokuapp.com/api/user"
  useEffect(() => {
    if(localStorage.authToken){
    fetch(url, {
      headers: {
        authorization: `Token ${localStorage.authToken}`,
      }}).then(res => res.json()).then((data) => localStorage.setItem("authToken",data.user.token))
  }},[])
  return (
    <main>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={DashBoard} />
      </Switch>
    </main>
  );
}

export default App;
