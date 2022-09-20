import {DECREMENT, INCREMENT} from "../constants";

/**
 * 该文件专门为Count组件生成action对象
 */

// 同步action，返回一个Object。即，同步action，就是指action的类型为Object类型的一般对象。
export const createIncrementAction = data => ({type: INCREMENT, data});

export const createDecrementAction = data => ({type: DECREMENT, data});

// 异步action，需要返回一个函数。即，异步action，就是指action值的类型是函数
// createIncrementAsyncAction是一个方法
export const createIncrementAsyncAction = (data, time) => {
  // 返回值类型是函数类型。
  // 这个函数是由store帮我们调用的。store会帮我们传dispatch进来
  return (dispatch) => {
    // 函数由store帮忙调用
    setTimeout(() => {
      // 时间到了，通知redux处理data.
      // 异步action中一般都会调用同步action
      dispatch(createIncrementAction(data));
    }, time);
  }
  // 因为函数中可以开启异步任务
}
