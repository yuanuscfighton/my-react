// 1.引入Count的UI组件
import CountUI from '../../components/Count'
// 2.引入connect用于连接UI组件和redux
import {connect} from "react-redux";
import {createDecrementAction, createIncrementAction, createIncrementAsyncAction} from "../../redux/count_action";

// 最终版本
const CountContainer = connect(
  state => ({count: state}),
  // mapDispatchToProps的简写
  // react-redux能帮我们自动dispatch
  {
    add: createIncrementAction,
    minus: createDecrementAction,
    addAsync: createIncrementAsyncAction,
  }
)(CountUI);

export default CountContainer;

