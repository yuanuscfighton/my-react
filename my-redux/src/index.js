import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";


ReactDOM.render(<App/>, document.getElementById('root'));

// 监测redux中状态的变化。即只要redux所保存的任何一个状态发生改变只要变化，都会调用回调，然后触发render，导致页面的刷新
store.subscribe(() => {
  ReactDOM.render(<App/>, document.getElementById('root'));
})