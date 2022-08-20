/**
 * 1.该文件是用于创建一个为Count组件服务的reducer，reducer本质就是一个函数。
 *  （为什么是函数？因为reducer需要接受参数，并且需要将状态返回，只有函数能完成这个工作）
 *
 * 2.每个组件都要有自己的reducer
 *
 * 3.reducer函数会接收到两个参数:（a）之前的状态(preState)（b）动作对象(action)
 *  （1）reducer相当于餐厅的后厨
 *  （2）reducer可以初始状态和加工状态
 */
const initState = -666; // 初始化状态
export default function countReducer(preState = initState, action) {

  // 首次的时候，preState是undefined
  // console.log("====>>> preState=", preState);

  // if (preState === undefined) {
  //   return 0;
  // }

  // action输出一个对象，{type: "@@redux/INITy.a.d.j.1.b"} .a.d.j.1.b是随机数
  // console.log("====>>> action=", action);

  // 解构赋值，从action对象中获取 type(要做什么)、data(数据)
  const {type, data} = action;
  // 根据type判断如何加工数据
  switch (type) {
    case 'increment':
      // 之前的值 + 新的数据
      // 将加的结果返回
      return preState + data;
    case 'decrement':
      return preState - data;
    default:
      return preState;
  }
}