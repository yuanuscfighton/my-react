import React from "react";
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";

// 创建"外壳"组件App
class App extends React.Component {
  render() {
    return (
      <div>
        <Hello/>
        <Welcome/>
      </div>
    );
  }
}

// 暴露App组件
export default App;