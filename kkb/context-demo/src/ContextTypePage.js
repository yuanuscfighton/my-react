import React, {Component} from 'react';
import {MyContext} from "./Context";

/**
 * 在类式组件中，使用context
 */
export default class ContextTypePage extends Component {
  static contextType = MyContext;

  render() {

    const {themeColor} = this.context;

    return (
      <div>
        <p>读取到的themeColor是 {themeColor}</p>
      </div>
    );
  }
}