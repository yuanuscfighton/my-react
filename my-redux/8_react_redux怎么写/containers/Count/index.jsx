// 引入connect用于连接UI组件和redux
import {connect} from "react-redux";
import React from "react";
import {createIncrementAction} from "../../redux/count_action";

// step1
class Count extends React.Component {

  plus = () => {
    this.props.add(1);
  }

  render() {
    return (
      <div>
        <h1>当前求和为: {this.props.result}</h1>
        <button onClick={this.plus}>点我加1</button>
      </div>
    );
  }
}

// step2
export default connect(
  // 映射状态
  state => ({result: state}),
  // 映射操作状态的方法
  {add: createIncrementAction},
)(Count);
