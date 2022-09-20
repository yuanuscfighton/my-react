import {createSlice} from "@reduxjs/toolkit";

// createSlice 创建reducer切片
// options是一个配置对象
const studentSlice = createSlice({
  // 属性1: 用来自动生成action中的type的常量值
  name: 'stu',

  // 属性2: state的初始值
  initialState: {
    name: '张三',
    age: 18,
    gender: '男',
    address: '北京',
  },

  // 属性3: 指定对state的各种操作，(直接在对象中的添加操作state的方法)
  reducers: {
    setName(state, action) {
      // 参数1: state是以前的state，但这个state是一个代理对象，可以直接修改，没有变化的属性不需要写
      // state.name = '李四';
      state.name = action.payload;
    },
    setAge(state, action) {
      // state.age = 28;
      state.age = action.payload;
    }
  }
});

// actions中存储的是slice自动生成的action创建器(函数)，调用函数后会自动创建action对象
// action对象的结构 {type:name/函数名, payload:函数的参数}
export const {setName, setAge} = studentSlice.actions;

export const {reducer: stuReducer} = studentSlice;