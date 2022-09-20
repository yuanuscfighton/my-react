import objReducer from '../redux/reducer'

// 创建store对象，需要配置对象作为参数
import {createStore} from "redux";

const store = createStore(objReducer);

export default store;