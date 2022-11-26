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
 * 5.新增文件
 *   -redux
 *     -count_action.js 专门用于创建action对象
 *     -constant.js 放置容易写错的type值
 */
