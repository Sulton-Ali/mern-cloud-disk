import React, { useEffect } from "react";
import Navbar from "./navbar/Navbar";
import "./app.scss";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Registration from "../components/authorization/Registration";
import Login from "../components/authorization/Login";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "./../actions/user";
import Disk from "./disk/Disk";

function App() {
  const isAuth = useSelector((state) => state.user.isAuth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="wrap">
          {!isAuth ? (
            <Switch>
              <Route path="/registration" component={Registration} />
              <Route path="/login" component={Login} />
              <Redirect to="/login" />
            </Switch>
          ) : (
            <Switch>
              <Route exect path="/" component={Disk} />
              <Redirect to="/" />
            </Switch>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
