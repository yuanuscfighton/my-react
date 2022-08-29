import React from "react";
import ReactDOM from 'react-dom';
import App from './App';
// 引入Provider
import {Provider} from "react-redux";
import store from "./redux/store";

// 检测redux中的状态的改变，如redux的状态发生了改变，那么重新渲染App组件
// store.subscribe(() => {
//   ReactDOM.render(<App/>, document.getElementById('root'));
// })
// 在使用react-redux之后，就不需要我们自己监听状态的变化了。因为所有逻辑都藏在了connect()()方法调用中了

// 整个App中，只要是需要store的地方都能传过去
ReactDOM.render(
  <Provider store = {store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);