import {DECREMENT, INCREMENT} from "../constants";

/**
 * 1.该文件是用于创建一个为Count组件服务的reducer，reducer本质就是一个函数
 *
 * Reducers相当于餐厅的后厨
 */
const initState = -1; // 初始化状态
export default function countReducer(preState = initState, action) {

  // 验证countReducer是否执行了
  // console.log('countReducer invoked');

  // 从action对象中获取 type、data
  const {type, data} = action;

  // 根据type判断如何加工数据
  switch (type) {
    case INCREMENT:
      return preState + data;
    case DECREMENT:
      return preState - data;
    default:
      return preState;
  }
}