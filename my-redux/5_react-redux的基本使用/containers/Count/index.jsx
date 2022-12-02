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
 * 通过a函数，容器组件将「redux中所保存的状态」传递给UI组件
 * ////////////////////////////////////////////
 * a函数的返回值作为状态传递给UI组件
 * （1）a函数返回的是一个对象，用于传递redux中保存的状态
 * （2）a函数返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value -- 状态
 * ////////////////////////////////////////////
 * 函数a的入参说明:
 * a函数是react-redux调用的，而函数a用于传递状态，所以react-redux在调用a函数的时候，已经把state传进来了。
 * 因此不需要我们自己store.getState()获取redux中的状态
 */
function a(state) {  // a ==> mapStateToProps
  // 目的是传递状态
  // 🌰 return {n: 900}
  // ❌ redux中保存的状态不能通过 store.getState() 获取，因为在App组件中，已经传入store对象了
  return {count: state}; // 从redux中拿状态
}

/**
 * 通过b函数，容器组件将「操作状态的方法」传给UI组件
 * （1）b函数返回的是一个对象，用于传递操作状态的方法
 * （2）b函数返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value -- 操作状态的方法
 */
function b(dispatch) {  // b ==> mapDispatchToProps
  return {
    // number是调用的地方传入的参数
    add: (number) => {
      // console.log("====>>> number:", number);

      // 通知redux执行加法
      dispatch(createIncrementAction(number));
    },
    minus: number => dispatch(createDecrementAction(number)),
    addAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time)),
  }
}

/**
 * [这是一个容器组件]
 * 使用connect()()创建并暴露一个Count的容器组件
 *
 * 1.容器组件是一个桥梁，左手边是UI组件，右手边是redux。因此需要react-redux库
 *    （1）引入connect，用于连接左右手: connect()()，connect是个函数，connect调用的返回值依然是个函数
 *    （2）使用connect()()创建一个Count容器组件CountContainer。容器是一个桥梁，连接UI组件和redux
 *
 * 2. 函数a和b中的入参:
 *    （1）a函数是react-redux调用的，而函数a用于传递状态，所以react-redux在调用a函数的时候，已经把state传进来了。
 *         因此不需要我们自己store.getState()获取redux中的状态
 *    （2）b函数中也会由react-redux传入dispatch
 */
const CountContainer = connect(a, b)(CountUI);
// connect在第一次调用的时候，需要传递两个参数，且这两个是函数

// 暴露Count容器组件
export default CountContainer;

