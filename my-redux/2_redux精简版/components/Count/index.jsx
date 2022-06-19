import React from 'react';
// 获取store，用于保存redux中保存的状态
import store from '../../redux/store';

export default class Count extends React.Component {

  // state = {
  //   // 已经交给redux进行管理了，所以这里不应该再存储count值了
  //   // 但state中可以存储本Count组件自身的状态
  //   count: 0,
  // };

  componentDidMount() {
    // 监测redux中状态的变化。即只要redux所保存的任何一个状态发生改变只要变化，都会调用回调，然后触发render，导致页面的刷新
    // store.subscribe(() => {
    //   // 箭头函数没有自己的this，但是componentDidMount是生命周期的钩子，生命周期钩子里面的this是组件的实例对象
    //
    //   // ❌ 自己主动调用render()不会刷新页面
    //   // this.render();
    //   this.setState({});
    // })
    // 在index.js中检测redux状态变化
  }

  // 加法操作
  increment = () => {
    // 获取选择的数值
    const {value} = this.selectNumber;
    // const {count} = this.state;

    // 通知redux加value,
    // 注意📢: redux中的状态的变化，不会引起页面的更新.（redux只是管理状态，不负责刷新/更新页面）
    store.dispatch({type: 'increment', data: value * 1});

    //  this.setState作用:（1）能改状态（2）能调render()
    // this.setState({
    //   count: count + value * 1,
    // });
  }

  // 减法操作
  decrement = () => {
    // 获取选择的数值
    const {value} = this.selectNumber;
    store.dispatch({type: 'decrement', data: value * 1});

    // const {count} = this.state;
    // this.setState({
    //   count: count - value * 1,
    // });
  }

  // 求和为奇数的时候，加法操作
  incrementIfOdd = () => {
    const {value} = this.selectNumber;
    const count = store.getState();
    if (count % 2 !== 0) {
      store.dispatch({type: 'increment', data: value * 1});
    }
  }

  render() {
    return (
      <div>
        {/*<h1>当前求和为: {this.state.count}</h1>*/}
        {/* 已经把count状态交给了redux管理，所以这里需要找redux获取count状态 */}
        <h1>当前求和为: {store.getState()}</h1>
        <select ref = {c => this.selectNumber = c}>
          <option value = {1}>1</option>
          <option value = {2}>2</option>
          <option value = {3}>3</option>
          <option value = {4}>4</option>
        </select>&nbsp;

        <button onClick = {this.increment}>加1</button>
        &nbsp;
        <button onClick = {this.decrement}>减1</button>
        &nbsp;
        <button onClick = {this.incrementIfOdd}>当和是奇数再加1</button>
      </div>
    );
  }
}
