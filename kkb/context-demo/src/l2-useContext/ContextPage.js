import React from "react";
import UseContextPage from './UseContextPage'
import {L2Context} from "./Context";

export default class L2ContextPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: {
        themeColor: 'l2-normal-color'
      }
    }
  }

  render() {
    const {theme} = this.state;
    return (
      <div>
        <h3>L2ContextPage</h3>
        <L2Context.Provider value = {theme}>
          <UseContextPage/>
        </L2Context.Provider>

      </div>
    )
  }
}

/**
 * ##如何使用Context
 *
 * step1 创建一个context对象. [React.createContext()]
 *      当React渲染一个订阅了这个Context对象的组件的时候，这个组件会从组件树中离自身最近的那个匹配的`Provider`中读取到当前的context值
 *
 * step2 创建Provider，传递value. [Context.Provider]
 *     (1) Provider接收一个`value`属性，传递给消费组件。允许消费组件订阅context的变化。一个Provider可以和多个消费组件有对应关系。
 *      多个Provider也可以嵌套使用，里层的会覆盖外层的数据。
 *     (2) 当Provider的`value`值发生变化的时候，它内部的所有消费组件都会重新渲染。Provider及其内部consumer组件都不受限于
 *      `shouldComponentUpdate`函数，因此当consumer组件在其祖先组件退出更新的情况下，也能更新。
 *
 * step3 子组件消费value，有3个方法
 *     方法2: useContext ==> 适用于函数式组件
 */