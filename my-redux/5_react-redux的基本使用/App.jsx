import React from "react";
// 引入容器组件
import Count from "./containers/Count";
import store from './redux/store';


class App extends React.Component {
  render() {
    return (
      <div>
        {/* 给容器组件传递store */}
        <Count store = {store}/>
      </div>
    );
  }
}

export default App;


/**
 * 说明 containers/Count/index.jsx 文件
 *
 * 1.该文件的作用: 连接UI组件和redux
 *
 * 2.使用步骤:
 * （1）因此需要引入UI组件，即引入Count的UI组件，import CountUI from '... / components/Count';
 * （2）容器中的store不能自己引入，需要在上一层通过props传过来，即不能import store from '...';
 * （3）连接左右手，即连接UI组件和store，因此需要引入connect方法，import {connect} from 'react-redux';
 *     说明: connect()() ==> （a）connect是一个函数;（b）connect()调用的返回值仍然是一个函数
 *     step1  const CountContainer = connect()(); // 返回一个求和的容器组件
 *     step2  和UI组件建立联系: connect()(UI组件); i.e. connect(?,?)(CountUI);
 *     step3  和redux建立联系
 *
 * 3.容器组件需要给UI组件传递: （1）redux中所保存的状态;（2）用于操作状态的方法
 *    ==> 需要借助props来传递
 *   现状: const CountContainer = connect()(CountUI);
 *   问题: 这里的父子关系不是通过👇🏻的代码呈现出来的，而是通过connect()方法形成的
 *            <A>
 *                <B a='1'/>
 *            </A>
 *   解决思路: 父给子传递东西，都是一组一组的key:value
 *   解决: connect()在第一次调用的时候，需要传递两个参数，但这两个参数必须是function类型的参数
 */

/****************************************************************************************************/
/****************************************************************************************************/

/**
 * #求和案例--react-redux基本使用
 *
 * 1.两个概念
 *  （1）UI组件: 不能使用任何redux相关的api，只负责页面的呈现、交互
 *  （2）容器组件: 负责和redux通信，将结果交给UI组件
 *
 * 2.如何创建一个容器组件 -- 使用react-redux中的connect函数
 *    connect(mapStateToProps, mapDispatchToProps)(UI组件)
 *      - mapStateToProps: 映射状态，返回值是一个对象
 *      - mapDispatchToProps: 映射操作状态的方法，返回值是一个对象
 *
 * 3.📢注意: 容器组件中的store是依靠props传进去的，而不是在容器组件中直接引入
 */