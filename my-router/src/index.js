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

// 路由组件和一般组件
// 这个demo中，About和Home都属于路由组件
// 在<App/>组件中，引入了Home和About组件，import Home from './components/Home' 和 import About from './components/About'
// <About/>、<Home/> 是自己在App中写组件标签，这种组件称作一般组件
// 但在<App/>中写的是 <Route path="/about" component={About} />，这里是依靠路由匹配，展示的组件，所以称作路由组件
// 因此，按照规范来说，路由组件就不应该放在components文件夹中，而是放在pages文件夹中。


// 路由的基本使用
// 1.明确好界面中的导航区、展示区
// 2.导航区的a标签改为Link标签
//    <Link path="/xxx" component={Demo} />
// 3.展示区写Route标签进行路径的匹配
//    <Route path="/xxx" component={Demo} />
// 4.<App/>的最外侧包裹了<BrowserRouter>或<HashRouter>

// 路由组件和一般组件
// 1.写法不同：
// （1）一般组件 <Demo/>
// （2）路由组件 <Route path="/demo" component={Demo} />
// 2.存放的位置不同
// （1）一般组件：components
// （2）路由组件：pages
// 3.收到的props不同
// （1）一般组件：写组件标签时传递了什么，就能收到什么是
// （2）路由组件：接收到3个固定的属性
//
// history:
//    go: ƒ go(n)
//    goBack: ƒ goBack()
//    goForward: ƒ goForward()
//    push: ƒ push(path, state)
//    replace: ƒ replace(path, state)
//
// location:
//    pathname: "/about"
//    search: ""
//    state: undefined
//
// match:
//    params:
//    path: "/about"
//    url: "/about"

