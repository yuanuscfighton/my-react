import React, {useEffect, useRef, useState} from "react";
import ReactDOM from "react-dom";

// 函数式组件
function Demo() {

  const [count, setCount] = useState(0);
  const [isHot, setIsHot] = useState(false);
  const myRef = useRef();

  // callback是否相当于didMount还是didMountUpdate取决于第2个参数
  useEffect(() => {
    let timer = setInterval(() => {
      setCount(count => count + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    }
  }, []);

  function plusOne() {
    // 第1种写法
    // setCount(count + 1);

    // 第2种写法
    setCount((count) => {
      return count + 1;
    })
  }

  function changeWeather() {
    setIsHot((isHot) => {
      return !isHot;
    })
  }

  function unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'));
  }

  function showInfo() {
    alert(myRef.current.value);
  }

  return (
    <div>
      <input type = "text" ref = {myRef}/>
      <h2>当前的数值: {count}</h2>
      <h2>今天天气很{isHot ? "炎热" : "凉爽"}</h2>
      <button onClick = {plusOne}>点我加1</button>
      <button onClick = {changeWeather}>更改天气</button>
      <button onClick = {unmount}>卸载组件</button>
      <button onClick = {showInfo}>提示输入内容</button>
    </div>

  )
}

export default Demo;