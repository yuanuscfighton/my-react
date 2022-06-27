import React from "react";
import Count from "./components/Count";


class App extends React.Component {
  render() {
    return (
      <div>
        <Count/>
      </div>
    );
  }
}

export default App;

/**
 * #求和案例--redux异步action版本
 *
 * 1.明确: 延迟的动作不想交给组件自身，而是交给action
 *
 * 2.何时需要异步action: 想要对状态进行操作，但是具体的数据需要等待异步任务的返回
 *
 * 3.具体编码:
 *  （1）yarn add redux-thunk 并配置在store.js文件中
 *  （2）创建action的函数不再返回一般action对象，而是一个函数，该函数中写异步任务
 *  （3）异步任务有结果后，分发给一个同步的action去真正操作数据
 *
 * 4.📢注意: 异步action不是必须要写的，完全可以自己等待异步任务的结果了再去分发同步action
 */
