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
 * #求和案例--redux精简版
 * [这里可以暂时省略Action Creators]
 *
 ***********************************************************************************************************
 * 0.开发步骤
 * （1）安装redux
 *    yarn add redux
 *
 * （2）开发顺序
 *    step1 store.js --> 只有一个
 *    step2 reducers.js --> 每个组件都需要有自己的reducer。如，组件A想把自己的状态交给redux，就需要为A构建一个reducer
 *
 ***********************************************************************************************************
 * 1.src下建立
 *    -redux
 *      -store.js
 *      -count_reducer.js
 *
 * 2.store.js
 *  （1）引入redux的createStore函数，创建一个store
 *  （2）createStore调用时需要传入一个为其服务的reducer
 *  （3）export store对象
 *
 * 3.count_reducer.js
 *  （1）reducer的本质是一个函数，接收: preState、action，返回加工后的状态
 *  （2）reducer有两个作用: 初始化状态、加工状态
 *  （3）reducer第一次调用的时候，是store自动触发的，传递的preState是undefined
 *
 * 4.在index.js中监测store中状态的改变，一旦发生改变重新渲染<App/>
 *   注意📢  redux只负责管理状态，至于状态的改变驱动着页面的展示，要靠我们自己写
 */

// typescript文档: https://www.w3cschool.cn/typescript/typescript-tutorial.html
