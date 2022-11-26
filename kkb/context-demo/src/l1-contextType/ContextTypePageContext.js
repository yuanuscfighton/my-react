import React, {Component} from "react";
import {L1Context} from "./Context";

/**
 * 在类式组件中，使用context
 */
export default class ContextTypePageProps extends Component {
  // contextType就是消费者
  static contextType = L1Context;

  render() {
    console.log("===> this:", this)
    const {themeColor} = this.context;
    return (
      <div>
        <p>读取到的themeColor是 {themeColor}</p>
      </div>
    );
  }
}