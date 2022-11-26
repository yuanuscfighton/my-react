import {configureStore, createSlice} from "@reduxjs/toolkit";

// 使用RTK构建store
// 第1步: createSlice 创建reducer切片
const studentSlice = createSlice({ // options是一个配置对象

  // 属性1: 用来自动生成action对象中的type的常量值
  name: 'stu',

  // 属性2: 当前切片的state的初始值
  initialState: {
    name: '张三',
    age: 18,
    gender: '男',
    address: '北京',
  },

  // 属性3: 指定对state的各种操作，可以直接在对象中的添加操作state的方法
  reducers: {
    setName(prevState, action) {
      // 参数1: prevState是以前的state，但这个prevState是一个代理对象，可以直接修改，没有变化的属性不需要写
      // prevState.name = '李四';
      prevState.name = action.payload;
    },
    setAge(prevState, action) {
      // prevState.age = 28;
      prevState.age = action.payload;
    }
  }
});

// 切片对象会自动帮助我们生成action
console.log(studentSlice.actions); // 打印: setName: ƒ actionCreator() 和 setAge: ƒ actionCreator() <== 自动生成的action函数

// actions中存储的是slice自动生成的action创建器(函数)，调用函数后会自动创建action对象
// action对象的结构 {type:name/函数名, payload:函数的参数}
export const {setName, setAge} = studentSlice.actions;
// const nameAction = setName("王五");
// console.log(nameAction); // { "type": "stu/setName", "payload": "王五" }
// 说明:type: "stu/setName", stu就是在属性1中定义的值
// 说明:payload: 就是我们往setName()函数中传入的值
// 好处:有了这个之后，就不需要我们手动创建action对象了，直接使用setName就可以生成action对象了

//////////////////////////////////////////////////////////////////////////////////////////////
// 第2步: 创建store对象，需要配置对象作为参数
const store = configureStore({
  reducer: {
    xuesheng: studentSlice.reducer
  }
});

export default store;