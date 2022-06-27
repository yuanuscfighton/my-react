import React from 'react';
// 获取store，用于保存redux中保存的状态
import store from '../../redux/store';
// 引入actionCreator，专门用于创建action对象
import {createIncrementAction, createDecrementAction, createIncrementAsyncAction} from '../../redux/count_action';

export default class Count extends React.Component {

  increment = () => {
    // 获取选择的数值
    const {value} = this.selectNumber;

    // 通知redux加value,
    // 注意📢: redux中的状态的变化，不会引起页面的更新.（redux只是管理状态，不负责刷新/更新页面）
    store.dispatch(createIncrementAction(value * 1));
  }

  decrement = () => {
    // 获取选择的数值
    const {value} = this.selectNumber;
    store.dispatch(createDecrementAction(value * 1));
  }

  incrementIfOdd = () => {
    const {value} = this.selectNumber;
    const count = store.getState();
    if (count % 2 !== 0) {
      store.dispatch(createIncrementAction(value * 1));
    }
  }

  // 异步加
  incrementAsync = () => {
    const {value} = this.selectNumber;
    // setTimeout(() => {
    //   store.dispatch(createIncrementAction(value * 1));
    // }, 500);


    store.dispatch(createIncrementAsyncAction(value * 1, 500));
  }

  render() {
    return (
      <div>
        <h1>当前求和为: {store.getState()}</h1>
        <select ref = {c => this.selectNumber = c}>
          <option value = {1}>1</option>
          <option value = {2}>2</option>
          <option value = {3}>3</option>
        </select>&nbsp;

        <button onClick = {this.increment}>加1</button>
        &nbsp;
        <button onClick = {this.decrement}>减1</button>
        &nbsp;
        <button onClick = {this.incrementIfOdd}>当和是奇数再加1</button>
        &nbsp;
        <button onClick = {this.incrementAsync}>异步加1</button>
      </div>
    )
      ;
  }
}
