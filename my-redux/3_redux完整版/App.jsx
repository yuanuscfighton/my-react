import React from "react";
import Count from "./components/Count";


class App extends React.Component {
  render() {
    return (
      <div>
        <Count/>
      </div>
    );
  }
}

export default App;

/**
 * #求和案例--redux完整版
 * [这里将Action Creators补回来]
 *
 * 1.src下建立
 *    -redux
 *      -store.js
 *      -count_reducer.js
 *
 * 2.store.js
 *  （1）引入redux的createStore函数，创建一个store
 *  （2）createStore调用时需要传入一个为其服务的reducer
 *  （3）export store对象
 *
 * 3.count_reducer.js
 *  （1）reducer的本质是一个函数，接收: preState、action，返回加工后的状态
 *  （2）reducer有两个作用: 初始化状态、加工状态
 *  （3）reducer第一次调用的时候，是store自动触发的，传递的preState是undefined
 *
 * 4.在index.js中监测store中状态的改变，一旦发生改变重新渲染<App/>
 *   注意📢  redux只负责管理状态，至于状态的改变驱动着页面的展示，要靠我们自己写
 *
 * 5.新增文件
 *   -redux
 *     -count_action.js 专门用于创建action对象
 *     -constant.js 放置容易写错的type值
 */
