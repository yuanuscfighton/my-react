import {DECREMENT, INCREMENT} from "./constant";

export function createIncrementAction(data) {
  return {type: INCREMENT, payload: data};
}

export function createDecrementAction(data) {
  return {type: DECREMENT, payload: data};
}

export function createIncrementAsyncAction(data, timeMs) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(data));
    }, timeMs);
  }
}