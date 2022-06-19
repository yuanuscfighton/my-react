// 引入createStore，专门用于创建redux中最核心的store对象
import {createStore, applyMiddleware, combineReducers} from 'redux';
// 引入为Count组件服务的reducer
import countReducer from './reducers/count';
// 引入为Person组件服务的reducer
import {personReducer} from "./reducers/person";
// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk';

/**
 * combineReducers方法传入的对象就是redux帮我们保存的总状态对象
 * 此处，总状态对象就是求和的数值和人的数组
 */
const allReducers = combineReducers({
  sum: countReducer, // key-value形式，value就是谁以后能初始化/加工 sum
  persons: personReducer,
});
// ❌ Uncaught Error: Objects are not valid as a React child (found: object with keys {sum, persons}).
// If you meant to render a collection of children, use an array instead.
// Object是不能作为一个节点的，即要把一个对象往页面上放
// 上面代码就是合并了reducer，导致redux中保存的总状态就是一个对象了，以前是一个数值或者...，见使用的地方 containers/Count/index.jsx


/**
 * 该文件专门用于暴露一个store对象，整个应用只有一个store对象
 *
 * store相当于餐厅的老板
 */
export default createStore(allReducers, applyMiddleware(thunk));