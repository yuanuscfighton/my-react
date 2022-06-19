// 引入Count的UI组件
import CountUI from '../../components/Count'
// 引入connect用于连接UI组件和redux
import {connect} from "react-redux";
import {createDecrementAction, createIncrementAction, createIncrementAsyncAction} from "../../redux/count_action";

const CountContainer = connect(
  state => ({count: state}),
  // mapDispatchToProps一般写法
  dispatch => ({
    add: (number) => {
      dispatch(createIncrementAction(number));
    },
    minus: number => dispatch(createDecrementAction(number)),
    addAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time)),
  })
)(CountUI);

export default CountContainer;

