// 引入createStore，专门用于创建redux中最核心的store对象
import {legacy_createStore as createStore} from 'redux';
// 引入为Count组件服务的reducer
// （1）引入createStore，专门用于创建redux中最核心的store对象
// （2）引入为Count组件服务的reducer
import countReducer from './count_reducer';

/**
 * 该文件专门用于创建并暴露一个store对象，整个应用只有一个store对象
 *
 * store是指挥者，本身不干活。真正加工状态的是reducers
 * e.g. store相当于餐厅的老板，reducer是真正做饭的后厨. reducer为store服务
 */
export default createStore(countReducer);