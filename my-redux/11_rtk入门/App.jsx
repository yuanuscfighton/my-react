import React from "react";
import Student from "./components/Student";

class App extends React.Component {
  render() {
    return (
      <div>
        <Student/>
      </div>
    );
  }
}

export default App;

/**
 * 1.安装redux/toolkit依赖
 *    yarn add react-redux @reduxjs/toolkit
 *
 * 2.使用createSlice创建reducer切片。创建完切片之后，切片对象会自动帮助我们生成action
 *
 * 3.创建store对象
 */