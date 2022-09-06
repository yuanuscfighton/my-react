// 使用RTK构建store
import {configureStore} from "@reduxjs/toolkit";
import {stuReducer} from "./studentSlice";
import {schoolReducer} from "./schoolSlice";


// 创建store对象，需要配置对象作为参数
const store = configureStore({
  reducer: {
    xuesheng: stuReducer,
    xuexiao: schoolReducer,
  }
});

export default store;