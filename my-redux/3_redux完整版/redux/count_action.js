import {DECREMENT, INCREMENT} from "./constants";

/**
 * 该文件专门为Count组件生成action对象
 */

// 同步action，返回一个Object。即，同步action，就是指action的类型为Object类型的一般对象。
export const createIncrementAction = data => ({type: INCREMENT, data});

export const createDecrementAction = data => ({type: DECREMENT, data});
