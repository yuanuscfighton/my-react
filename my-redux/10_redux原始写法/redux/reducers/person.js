import {ADD_PERSON} from "../constant";

const initState = [{id: "000", name: "小明", age: 0}];

export function personReducer(preState = initState, action) {
  const {type, payload} = action;

  switch (type) {
    case ADD_PERSON:
      return [payload, ...preState];
    default:
      return preState;
  }
}