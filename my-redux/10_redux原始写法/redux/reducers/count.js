import {DECREMENT, INCREMENT} from "../constant";

const initState = -1;

export default function countReducer(preState = initState, action) {
  const {type, payload} = action;

  switch (type) {
    case INCREMENT:
      return preState + payload;
    case DECREMENT:
      return preState - payload;
    default:
      return preState;
  }
}