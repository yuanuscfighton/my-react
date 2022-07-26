// 引入createStore，专门用于创建redux中最核心的store对象
import {legacy_createStore as createStore} from 'redux';

// 引入为Count组件服务的reducer
// （1）引入createStore，专门用于创建redux中最核心的store对象
// （2）引入为Count组件服务的reducer
import countReducer from './count_reducer';

/**
 * 该文件专门用于创建并暴露一个store对象，整个应用只有一个store对象
 *
 * 方法的入参: reducer为store卖命服务，所以在创建store的时候，需要指定好reducer
 *
 * store是指挥者，本身不干活。真正加工状态的是reducers
 * e.g. store相当于餐厅的老板，reducer是真正做饭的后厨. 老板在开饭店之前就已经找好了后厨团，reducer为store服务
 */
export default createStore(countReducer);