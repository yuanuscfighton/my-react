// 引入Count的UI组件
import CountUI from '../../components/Count'
// 引入connect用于连接UI组件和redux
import {connect} from "react-redux";
import {createDecrementAction, createIncrementAction, createIncrementAsyncAction} from "../../redux/count_action";

// 优化2: 精简mapDispatchToProps
const CountContainer = connect(
  state => ({count: state}),
  // mapDispatchToProps的对象形式
  // react-redux会帮我们做dispatch分发操作
  {
    add: createIncrementAction,
    minus: createDecrementAction,
    addAsync: createIncrementAsyncAction,
  }
)(CountUI);

/*
    // mapDispatchToProps一般写法
    dispatch => ({
      add: (number) => {
        dispatch(createIncrementAction(number));
      },
      minus: number => dispatch(createDecrementAction(number)),
      addAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time)),
    })
 */

export default CountContainer;

