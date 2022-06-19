import React from "react";
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/store";


// 整个App中，只要是需要store的地方都能传过去
ReactDOM.render(
  <Provider store = {store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

/**
 * 数据共享
 * 1.定义Person组件，和Count组件通过redux共享数据
 * 2.为Person组件编写: reducer、action、配置constant常量
 * 3.重点📢: Person的reducer和Count的reducer要使用combineReducers进行合并，合并后的总状态是一个对象
 * 4.交给store的是总reducer，最后注意现在组件中取出的状态的时候，要"取到位"
 */