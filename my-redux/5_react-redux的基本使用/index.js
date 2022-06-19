import React from "react";
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store';

ReactDOM.render(<App/>, document.getElementById('root'));

// 检测redux中的状态的改变，如redux的状态发生了改变，那么重新渲染App组件
store.subscribe(() => {
  ReactDOM.render(<App/>, document.getElementById('root'));
})

/**
 * react-redux基本使用
 *
 * 1.明确两个概念
 * （1）UI组件，不能使用任何redux的api，只负责页面的呈现、交互等
 * （2）容器组件，负责和redux通信，将结果交给UI组件
 *
 * 2.如何创建一个容器组件，依赖react-redux的connect函数
 *  （1）connect(mapStateToProps, mapDispatchToProps)(UI组件)
 *  （2）mapStateToProps，映射状态，返回值是一个对象
 *  （3）mapDispatchToProps，映射操作状态的方法，返回值是一个对象
 *
 * 3.注意
 * （1）容器组件中的store是靠props传进去的，而不是在容器组件中直接引入的
 * （2）mapDispatchToProps也可以是一个对象
 */