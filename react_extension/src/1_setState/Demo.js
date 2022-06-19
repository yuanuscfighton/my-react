import React from "react";

export default class Demo extends React.Component {

  state = {count: 0}

  plusOne = () => {
    ////////// 对象式的setState() //////////
    // 1.获取原来的count值
    // const {count} = this.state;
    // 2.更新状态
    // 对象式的setState()
    // this.setState({count: count + 1}, () => {
    //   console.log("setState中的callback. count=", count);
    // });

    ////////////////////////////////////////
    ////////////////////////////////////////
    ////////// 函数式的setState //////////
    this.setState((state, props) => {
      return ({count: state.count + 1})
    });
  }


  render() {
    console.log("render...");
    return (
      <div>
        <h2>当前的数值: {this.state.count}</h2>
        <button onClick = {this.plusOne}>点我加1</button>
      </div>
    );
  }
}