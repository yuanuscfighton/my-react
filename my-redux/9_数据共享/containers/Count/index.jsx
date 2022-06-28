// 引入connect用于连接UI组件和redux
import {connect} from "react-redux";
import {createDecrementAction, createIncrementAction, createIncrementAsyncAction} from "../../redux/actions/count";
import React from "react";

class Count extends React.Component {

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
    return (
      <div>
        <h2>我是Count组件</h2>
        <h4>当前求和为: {this.props.countXxx}，Person组件总人数为:{this.props.totalPersonNumXxx}</h4>
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

export default connect(
  // 这里的state就是redux帮我们保存的总状态，在没有合并reducer之前，就是一个0，即state就是0。
  // count:state表示将0传给自己的UI了。
  // 但现在执行了合并reducer操作，state(总状态)就不是单纯的0了，而是个对象了 {sum:countReducer, persons:personReducer}
  state => ({
    countXxx: state.he,
    totalPersonNumXxx: state.peiqi.length
  }),
  {
    add: createIncrementAction,
    minus: createDecrementAction,
    addAsync: createIncrementAsyncAction,
  }
)(Count);
