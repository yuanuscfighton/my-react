import React, {Component} from "react";

/**
 * 通过props方式传递themeColor值
 */
export default class ContextTypePageProps extends Component {

  render() {
    const {themeColor} = this.props;
    return (
      <div>
        <p>读取到的themeColor是 {themeColor}</p>
      </div>
    );
  }
}