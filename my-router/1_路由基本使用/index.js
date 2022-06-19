import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);

// 安装 react-router-dom依赖:
// yarn add react-router-dom@6

// step1 确定导航区和内容展示区
// 1.点击导航链接，引起路径变化
// 2.路径变化，被路由器监听到，进行匹配组件，从而展示对应的页面

// 路由的基本使用
// 1.明确好界面中的导航区、展示区
// 2.导航区的a标签改为Link标签
//    <Link path="/xxx" component={Demo} />
// 3.展示区写Route标签进行路径的匹配
//    <Route path="/xxx" component={Demo} />
// 4.<App/>的最外侧包裹了<BrowserRouter>或<HashRouter>