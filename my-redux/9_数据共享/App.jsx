import React from "react";
import Count from "./containers/Count";
import Person from "./containers/Person";

class App extends React.Component {
  render() {
    return (
      <div>
        <Count/>
        <hr/>
        <Person/>
      </div>
    );
  }
}

export default App;

/**
 * #求和案例--react-redux共享数据版
 *
 * 1.定义一个Person组件和Count组件，通过redux共享数据
 *
 * 2.为Person组件编写: reducer、action、配置constant常量
 *
 * 3.重点: Person的reducer和Count的reducer要使用combineReducers函数进行合并，合并后的总状态是一个对象
 *
 * 4.交给store的总是reducer，在组件中取出状态的时候，要取到位
 */