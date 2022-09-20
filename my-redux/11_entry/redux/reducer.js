import {ADD_N, ADD_ONE, MINUS_ONE} from "./constants";

/**
 * 问题:
 * 1. 如果state过于复杂，将会非常难以维护
 *    ==> 可以通过对state分组来解决这个问题，创建多个reducer，然后将其合并为一个
 * 2. state每次操作的时候，都需要对state进行复制，然后再去修改
 * 3. case后边的常量维护起来比较麻烦
 */

const init = {count: 0, name: 'UNKNOWN'}

export default function objReducer(preState = init, action) {
  const {type, data} = action;

  // https://www.bilibili.com/video/BV1bS4y1b7NV?p=99
  switch (type) {
    case ADD_ONE:
      return {...preState, count: preState.count + 1}

    case ADD_N:
      return {...preState, count: preState.count + data}

    case MINUS_ONE:
      return {...preState, count: preState.count - 1}

    default:
      return preState;
  }
}