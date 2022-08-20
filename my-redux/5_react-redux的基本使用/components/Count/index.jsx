import React from 'react';

// 这是一个UI组件，不能有redux相关的东西
export default class Count extends React.Component {

  increment = () => {
    // 获取选择的数值
    const {value} = this.selectNumber;
    this.props.add(value * 1);
  }

  decrement = () => {
    // 获取选择的数值
    const {value} = this.selectNumber;
    this.props.minus(value * 1);
  }

  incrementIfOdd = () => {
    const {value} = this.selectNumber;
    if (this.props.count % 2 !== 0) {
      this.props.add(value * 1);
    }
  }

  // 异步加
  incrementAsync = () => {
    const {value} = this.selectNumber;
    this.props.addAsync(value * 1, 500);
  }

  render() {
    // console.log('UI组件接收到的props是 ', this.props);
    // 输出 {store: {...}, count: -1, add: ƒ, minus: ƒ, addAsync: ƒ}
    return (
      <div>
        <h1>当前求和为: {this.props.count}</h1>
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
    );
  }
}
