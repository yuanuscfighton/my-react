import React from "react";
import {MyContext, MyUserContext} from "./Context";
import ContextTypePage from "./ContextTypePage";
import UseContextPage from "./UseContextPage";
import ConsumerPage from "./ConsumerPage";

export default class ContextPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // 需求: 跨层级传递themeColor
      theme: {
        themeColor: 'RED',
      },
      // 跨层级传递用户信息
      userInfo: {
        userName: '小明',
      },
    }
  }

  changeUserName = () => {
    const {userName} = this.state.userInfo;
    this.setState({
      userInfo: {
        userName: userName === '小明' ? '张三' : '小明'
      }
    });
  }

  changeThemeColor = () => {
    const {themeColor} = this.state.theme;
    this.setState(
      {
        theme: {
          themeColor: themeColor === 'RED' ? 'GREEN' : 'RED'
        }
      });
  }

  render() {
    const {theme, userInfo} = this.state;
    return (
      <div>
        <h3>ContextPage</h3>
        <button onClick = {this.changeThemeColor}>更改主题颜色</button>
        &nbsp;
        <button onClick = {this.changeUserName}>更改用户名</button>
        <MyContext.Provider value = {theme}>
          <MyUserContext.Provider value = {userInfo}>
            {/* 子组件 ---------- START ---------- */}
            <ContextTypePage/>
            <hr/>
            <UseContextPage/>
            <hr/>
            <ConsumerPage/>
            {/* 子组件 ---------- END ---------- */}
          </MyUserContext.Provider>
        </MyContext.Provider>
      </div>
    );
  }
}

/**
 * ##如何使用Context
 *
 * step1 创建一个context对象，e.g. React.createContext()
 *
 * step2 创建Provider，传递value
 *
 * step3 子组件消费value，有3个方法
 *    （1）contextType ==> 适用于   【demo见ContextTypePage.js】
 *                          (i)类式组件;
 *                          (ii)只能订阅单一的context来源，
 *                                static contextType = MyContext;
 *                                static anotherContextType = MyUserContext; // ❌错误
 *
 *    （2）useContext ==> 适用于函数式组件   【demo见UseContextPage.js】
 *
 *    （3）Consumer   【demo见ConsumerPage.js】
 */