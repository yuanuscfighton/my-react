import React from "react";
import "./index.css";
import {MyContext} from "./index";

export default class C extends React.Component {

  static contextType = MyContext;

  render() {
    console.log("C组件，", this);
    return (
      <div className = "child">
        <h3>我是C组件</h3>
        <h4>从B组件接收到的用户名: {this.context.username}</h4>
      </div>
    );
  }
}