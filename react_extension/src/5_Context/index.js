import React from "react";
import "./index.css";
import B from "./hello";

export const MyContext = React.createContext();

export default class A extends React.Component {

  state = {
    username: '张三',
    grade: '高中',
  };

  render() {
    const {username, age} = this.state;

    return (
      <div className = "grandparent">
        <h3>我是A组件</h3>
        <h4>用户名是{this.state.username}</h4>
        <MyContext.Provider value = {{username, age}}>
          <B name = {this.state.username}/>
        </MyContext.Provider>
      </div>
    );
  }
}