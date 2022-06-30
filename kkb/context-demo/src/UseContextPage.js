import React from "react";
import {MyContext, MyUserContext} from "./Context";

export default function UseContextPage() {
  const theme = React.useContext(MyContext);
  const userInfo = React.useContext(MyUserContext);

  return (
    <div>
      <h2>在函数式组件中，</h2>
      <p>读取到的themeColor是 {theme.themeColor}</p>
      <p>读取到的userName是 {userInfo.userName}</p>
    </div>
  )
}