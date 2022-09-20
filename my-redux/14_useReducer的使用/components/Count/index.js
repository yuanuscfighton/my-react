import React, {useReducer, useState} from "react";

/**
 * 改进版本
 */
export default function Student() {

  /**
   * useReducer(reducer, initialArg, init) hook说明:
   *
   * @param reducer: 是一个整合函数。对于我们当前state的所有操作都应该在该函数中定义，该函数的返回值会成为state的新值
   *                  reducer在执行的时候，会收到两个参数:
   *                      (1)preState:上次的状态
   *                      (2)action:
   * @param initializerArg: state的初始值，作用和useState()中的值一样
   * @return param1:state用来获取state的值，param2:state修改的派发器(i.e.通过派发器可以发送操作state的命令，具体的修改行为将会由另外一个函数执行).countDispatch是发指令的人，reducer是干活的人
   */
  const [count, countDispatch] = useReducer(
    // 注: 为了避免reducer会重复创建，通常reducer会定义到组件的外部
    // reducer是真正干活的
    (preState, action) => {
      // console.log("reducer执行了");
      // return '哈哈😄';
      // return preState + 1;
      if (action.type === 'ADD') {
        return preState + 1
      } else if (action.type === 'SUB') {
        return preState - 1
      } else {
        return preState
      }
    },
    1);

  // 加1操作
  const addHandler = () => {
    // dispatch是发指令的
    countDispatch({type: 'ADD', payload: 1});
  }

  const subHandler = () => {
    countDispatch({type: 'SUB'})
  }

  return (
    <div>
      <p>{count}</p>

      <button onClick = {addHandler}>增加</button>
      &nbsp;
      &nbsp;
      <button onClick = {subHandler}>减少</button>
    </div>
  )
}