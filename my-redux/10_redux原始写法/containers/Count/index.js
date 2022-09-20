import React from "react";
import {connect} from "react-redux";
import {createDecrementAction, createIncrementAction, createIncrementAsyncAction} from "../../redux/actions/count";

class CountUI extends React.Component {

  increment = () => {
    const {value} = this.selectNumber;
    this.props.add(value * 1);
  }

  decrement = () => {
    const {value} = this.selectNumber;
    this.props.minus(value * 1);
  }

  incrementIfOdd = () => {
    const {value} = this.selectNumber;
    const count = this.props.countXxx;
    if (count % 2 !== 0) {
      this.props.add(value * 1);
    }
  }

  incrementAsync = () => {
    const {value} = this.selectNumber;
    this.props.addAsync(value * 1, 500);
  }

  render() {
    return (
      <div>
        <h2>Count组件</h2>
        <h4>当前求和为: {this.props.countXxx}, Person总人数为:{this.props.totalPersonNum}</h4>
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
        &nbsp;
        <button onClick = {this.incrementAsync}>异步加1</button>
      </div>
    )
  }
}

export default connect(
  state => ({countXxx: state.he, totalPersonNum: state.peiqi.length}),
  {
    add: createIncrementAction,
    minus: createDecrementAction,
    addAsync: createIncrementAsyncAction,
  }
)(CountUI);