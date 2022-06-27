import {DECREMENT, INCREMENT} from "./constants";
import store from './store';

/**
 * 该文件专门为Count组件生成action对象
 */

// 同步action，返回一个Object。即，同步action，就是指action的类型为Object类型的一般对象。
export const createIncrementAction = data => ({type: INCREMENT, data});

export const createDecrementAction = data => ({type: DECREMENT, data});


// 异步action，需要返回一个函数。即，异步action，就是指action值的类型是函数类型
// createIncrementAsyncAction是一个方法
export const createIncrementAsyncAction = (data, time) => {

  /**************************************************************************************************************/
  // ❌错误的写法
  // error_message: Actions must be plain objects. Instead, the actual type was: 'function'.
  // You may need to add middleware to your store setup to handle dispatching other values,
  // such as 'redux-thunk' to handle dispatching functions.
  // 即，action必须是一个Object类型的一般对象(Plain Object)。出错的地方是下面👇🏻的代码，
  // createIncrementAsyncAction返回的不是Object类型的一般对象 { ... }，而是一个函数，
  // 像createIncrementAction返回的是Object类型的一般对象(Plain Object)。

  // 下面返回的是一个函数
  // return () => {
  //   setTimeout(() => {
  //     store.dispatch(createIncrementAction(data));
  //   }, time);
  // }
  //
  // middleware作用，让store可以接收一个函数类型的action，但不要将函数交给reducer让它干活，只需要帮忙执行一下函数就行
  /**************************************************************************************************************/
  /**************************************************************************************************************/

  /**************************************************************************************************************/
  // ✅正确的写法
  // 返回值类型是函数类型。
  // 由于这个函数是由store帮我们调用的，store会帮我们传dispatch进来，因此我们就不用import store，使用store.dispatch()方式了
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
