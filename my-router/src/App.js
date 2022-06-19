import React from "react";
import {Link, Route} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className = "row">
          <div className = "col-xs-offset-2 col-xs-8">
            <div className = "page-header"><h2>React Router</h2></div>
          </div>
        </div>
        <div className = "row">
          <div className = "col-xs-2 col-xs-offset-2">
            <div className = "list-group">

              {/* 原生html中，依靠<a>跳转不同的页面 */}
              {/* <a className="list-group-item" href="./about.html">About</a> */}
              {/* <a className="list-group-item active" href="./home.html">Home</a> */}
              {/* 改写成，页面只有一个(index.html)，组件有多个 */}

              {/* 在React中，依赖路由链接实现切换组件--编写路由链接 */}
              <Link className = "list-group-item" to = "/about">About</Link>
              <Link className = "list-group-item" to = "/home">Home</Link>
            </div>
          </div>
          <div className = "col-xs-6">
            <div className = "panel">
              <div className = "panel-body">
                {/* 注册路由 */}
                {/* 如果路径是"/about"，则对应About组件 */}
                <Route path = "/about" component = {About}/>
                <Route path = "/home" component = {Home}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

