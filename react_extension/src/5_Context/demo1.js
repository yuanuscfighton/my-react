import React from "react";
import "./index.css";
import {MyContext} from "./index";

export default function C() {
  return (
    <div className="child">
      <h3>我是C组件</h3>
      <h4>从A组件中接收到的用户名:
        <React.Consumer>
          {
            value => {
              return `${value.username}`;
            }
          }
        </React.Consumer>
      </h4>
    </div>
  )
}