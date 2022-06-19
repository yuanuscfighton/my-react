import React from "react";
import C from "./demo1";
import "./index.css";

export default class B extends React.Component {

  render() {
    console.log("B组件，", this);
    return (
      <div className = "parent">
        <h3>我是B组件</h3>
        <h4>从A组件接收到的用户名: "{this.props.name}"</h4>
        <C/>
      </div>
    );
  }
}