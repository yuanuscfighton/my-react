import React from "react";
import store from '../redux/store'
import {ADD_N, ADD_ONE, MINUS_ONE} from "../redux/constants";

export default function Component() {

  const plusOne = () => {
    store.dispatch({type: ADD_ONE})
  }

  const plusFive = () => {
    store.dispatch({type: ADD_N, data: 5});
  }

  const subtractOne = () => {
    store.dispatch({type: MINUS_ONE});
  }

  return (
    <div>
      <p>文字: {store.getState().name}</p>
      <p>数字: {store.getState().count}</p>
      <button onClick = {plusOne}>加1</button>
      &nbsp;
      &nbsp;
      <button onClick = {plusFive}>加5</button>
      &nbsp;
      &nbsp;
      <button onClick = {subtractOne}>减1</button>
    </div>
  )
}