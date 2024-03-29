import React from 'react';

export default class Count extends React.Component {

  state = {
    count: 0,
  };

  // 加
  increment = () => {
    // 获取选择的数值
    const {value} = this.selectNumber; // 这里的value是string类型
    // 读取原来的值
    const {count} = this.state;
    this.setState({
      count: count + value * 1,
    });
  }

  // 减
  decrement = () => {
    // 获取选择的数值
    const {value} = this.selectNumber;
    const {count} = this.state;
    this.setState({
      count: count - value * 1,
    });
  }

  // 奇数加
  incrementIfOdd = () => {
    const {value} = this.selectNumber;
    const {count} = this.state;
    if (count % 2 !== 0) {
      this.setState({
        count: count + value * 1,
      });
    }
  }

  // 异步加
  incrementAsync = () => {
    const {value} = this.selectNumber;
    const {count} = this.state;
    setTimeout(() => {
      this.setState({count: count + value * 1});
    }, 500);
  }

  render() {
    return (
      <div>
        <h2>我是Count组件</h2>
        <h4>当前求和为: {this.state.count}</h4>
        {/* 把select节点存在组件实例身上的selectNumber */}
        <select ref = {c => this.selectNumber = c}>
          <option value = {1}>1</option>
          <option value = {2}>2</option>
          <option value = {3}>3</option>
        </select>&nbsp;

        <button onClick = {this.increment}>加1</button>
        &nbsp;
        <button onClick = {this.decrement}>减1</button>
        &nbsp;
        <button onClick = {this.incrementIfOdd}>当前求和为奇数再加1</button>
        &nbsp;
        <button onClick = {this.incrementAsync}>异步加1</button>
      </div>
    );
  }
}
