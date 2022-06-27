// 1.引入Count的UI组件
import CountUI from '../../components/Count'

// 2.引入store
// ❌ Error: Could not find "store" in the context of "Connect(Count)"
// ✅ 容器中的store不能自己引入，需要在上一层通过props传过来
// import store from '../../redux/store';

// 3.引入connect用于连接UI组件和redux
import {connect} from "react-redux";
import {createDecrementAction, createIncrementAction, createIncrementAsyncAction} from "../../redux/count_action";

/**
 * 通过a函数，容器组件将redux中所保存的状态传递给UI组件
 * ////////////////////////////////////////////
 * a函数的返回值作为状态传递给UI组件
 * （1）a函数返回的是一个对象
 * （2）a函数返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
 * （3）a用于传递状态
 *
 * a函数是react-redux帮助我们调用的，在调用的时候，会把state传进来。
 */
function a(state) {  // a ==> mapStateToProps
  // 目的是传递状态
  // return {n: 900}
  return {count: state}; // 从redux中拿状态
}

/**
 * （1）b函数返回的是一个对象
 * （2）b函数返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
 * （3）b用于传递操作状态的方法
 */
function b(dispatch) {  // b ==> mapDispatchToProps
  // 目的是传递操作状态的方法
  return {
    add: (number) => {
      // console.log("====>>> number:", number);
      // 通知redux执行加法
      // dispatch({type: INCREMENT, data: number})
      dispatch(createIncrementAction(number));
    },
    minus: number => dispatch(createDecrementAction(number)),
    addAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time)),
  }
}

/**
 * 使用connect()()创建并暴露一个Count的容器组件
 *
 * 1.connect()()，connect是个函数，connect调用的返回值依然是个函数
 * 2.使用connect()()创建一个Count容器组件CountContainer。容器是一个桥梁，连接UI组件和redux
 */
const CountContainer = connect(a, b)(CountUI);
// connect在第一次调用的时候，需要传递两个参数，且这两个是函数

// 暴露Count容器组件
export default CountContainer;

