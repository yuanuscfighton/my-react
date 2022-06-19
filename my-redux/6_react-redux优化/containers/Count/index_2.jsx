// 引入Count的UI组件
import CountUI from '../../components/Count'
// 引入connect用于连接UI组件和redux
import {connect} from "react-redux";
import {createDecrementAction, createIncrementAction, createIncrementAsyncAction} from "../../redux/count_action";

// 映射状态
const mapStateToProps = state => ({count: state});

// 映射操作状态的方法
const mapDispatchToProps = dispatch => (
  {
    add: (number) => {
      dispatch(createIncrementAction(number));
    },
    minus: number => dispatch(createDecrementAction(number)),
    addAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time)),
  }
);

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

