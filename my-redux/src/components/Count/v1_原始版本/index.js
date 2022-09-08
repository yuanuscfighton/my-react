import React, {useState} from "react";

/**
 * 原始版本
 */
export default function Student() {

  const [count, setCount] = useState(1);

  const addHandler = () => {
    setCount((prevState) => prevState + 1);
  }

  const subHandler = () => {
    setCount((prevState) => prevState - 1);
  }

  return (
    <div>
      <p>{count}</p>

      <button onClick = {addHandler}>增加</button>
      &nbsp;
      &nbsp;
      <button onClick = {subHandler}>减少</button>
    </div>
  )
}