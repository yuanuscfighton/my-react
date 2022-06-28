import {ADD_PERSON} from "../constants";

// 初始化人的列表
const initState = [{id: "001", name: "张三", age: 10}]

export function personReducer(preState = initState, action) {

  // 验证personReducer是否执行了
  // console.log('personReducer invoked');

  const {type, data} = action;

  switch (type) {
    case ADD_PERSON:
      // ❌错误写法👇🏻
      // preState.unshift(data);
      // return preState;
      /////////////////////////////////////////////////////////////////
      // 原因:
      // redux底层做了判断，如果返回的东西和之前的东西是一样的，则不进行页面更新。
      // （此处做的是浅比较，即比较两个对象的地址值）
      // 👆上面的写法，也不是纯函数。因为unshift()会改变preState，即改写了入参
      // 📢 redux要求reducer必须是一个纯函数
      ////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////
      // ✅正确写法👇🏻
      // 拿到之前的数据，用展开运算符展开，然后放到一个新的数组里。
      // [...preState]和preState这两个数组不是同一个数组。
      return [data, ...preState];
    default:
      return preState;
  }

  /**
   * 1.纯函数: 只要是同样的输入(入参)，必定可以得到同样的输出(返回)
   *
   * 2.纯函数必须遵守以下约束:
   *  （1）不得改写参数数据
   *  （2）不会产生任何副作用，例如，网络请求，输入和输出设备
   *  （3）不能调用Date.now()或者Math.random()等不纯的方法
   *
   * 3.redux的reducer函数必须是一个纯函数
   */
}