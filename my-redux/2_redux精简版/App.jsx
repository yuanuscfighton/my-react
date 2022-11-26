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
 * #求和案例 -- redux精简版
 * [这里暂时省略Action Creators]
 *
 ***********************************************************************************************************
 * 0.开发步骤
 * （1）安装redux
 *    yarn add redux
 *
 * （2）开发顺序
 *    在src下建立
 *        -redux
 *            -store.js
 *            -count_reducer.js
 *
 *    step1 store.js --> 整个应用只有一个store对象(最核心的)
 *          （1）引入redux的createStore函数，创建一个store
 *          （2）createStore调用时需要传入一个为其服务的reducer
 *          （3）export store对象
 *
 *    step2 reducers.js --> 每个组件都需要有自己的reducer。
 *          如，组件A想把自己的状态交给redux，就需要为A构建一个reducer。组件B也想把自己的状态交给redux，就需要为B创建一个reducer。
 *          （1）reducer的本质是一个函数，接收: preState(之前的状态)、action，返回加工后的状态
 *          （2）reducer有两个作用: 初始化状态、加工状态
 *          （3）reducer第一次调用的时候，是store自动触发的，传递的preState是undefined
 *
 *    step3 components/Count/index.jsx
 *        (i) 引入store，获取状态 -- store.getState()
 *        (ii) 分发action，通知redux加value -- store.dispatch({ type: 'xxx', data: zzz});
 *        (iii) 状态的改变，引起UI的刷新. 监测redux中状态的变化 -- store.subscribe()
 *          可以把store.subscribe提取到index.jsx中，整个App都会重新render一次
 *
 *    step4 在index.js中监测store中状态的改变，一旦发生改变重新渲染<App/>
 *        注意⚠️: redux只负责管理状态，至于状态的改变驱动着页面的展示，要靠我们自己写
 *
 */

// typescript文档: https://www.w3cschool.cn/typescript/typescript-tutorial.html
