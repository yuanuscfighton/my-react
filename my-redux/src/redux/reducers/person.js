import {ADD_PERSON} from "../constants";

// 初始化人的列表
const initState = [{id: "001", name: "张三", age: 10}]

export function personReducer(preState = initState, action) {

  // 验证personReducer是否执行了
  // console.log('personReducer invoked');

  const {type, data} = action;

  switch (type) {
    case ADD_PERSON:
      return [data, ...preState];
    default:
      return preState;
  }
}