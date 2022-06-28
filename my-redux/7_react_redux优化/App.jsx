import React from "react";
import Count from "./containers/Count";

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
 * #求和案例--react-redux优化
 *
 * 1.容器组件和UI组件整合成一个文件
 *
 * 2.无需自己给容器组件传递store，给<App/>包裹一个<Provider store={store}/>即可
 *
 * 3.使用了react-redux后也不用再自己监测redux中状态的改变了，容器组件可以自动完成这个动作
 * 4.mapDispatchToProps可以简单的写成一个对象
 *
 * 5.一个组件要和redux打交道要经过哪几步
 * （1）定义好UI组件 -- 不暴露
 * （2）引入connect生成一个容器组件，并暴露，e.g.
 *        connect(
 *          state => ({key:value}), // 映射状态(state就是redux保存的状态)
 *          {key:xxxAction}, // 映射操作状态的方法
 *        )(UI组件)
 * （3）在UI组件中通过this.props.xxx读取和操作状态
 */