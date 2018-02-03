import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { IndexRoute } from "react-router";
import Home from "./components/home/home";
import Second from "./components/second/second";
import { Button } from "antd";

export default class App extends Component {
  constructor(props) {
    super();
    console.log(this);
  }
  componentDidMount () {
    fetch(__dirname+'package.json').then(res=>{
      console.log(res.json().then(res=>{
        console.log(res,111111111)
      }))
    })
  }
  render() {
    return (
      <Router>
        <div>
          <h1>App</h1>
          <NavLink to={"/home"}>
            <Button type="primary">home</Button>
          </NavLink>
          <NavLink to={"/second"}>
            <Button type="primary">second</Button>
          </NavLink>
          <Route path="/home" component={Home} />
          <Route path="/second" component={Second} />
        </div>
      </Router>
    );
  }
}
