import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setName, setAge} from '../../redux/store';

export default function Student() {

  // 第3步: useSelector() 用来加载state中的数据
  const student = useSelector(state => state.xuesheng);

  // 第4步: 通过useDispatch() 获取派发器的对象
  const dispatch = useDispatch();

  const setNameHandler = () => {
    // ⚠️RTK已经提供了action的构建器了，所以不能写成 dispatch({ ... });
    dispatch(setName("赵六"));
  }

  function setAgeHandler() {
    dispatch(setAge(30));
  }


  return (
    <div>
      {/* {"name":"张三","age":18,"gender":"男","address":"北京"} */}
      <p>{JSON.stringify(student)}</p>

      <button onClick = {setNameHandler}>修改名字</button>
      &nbsp;
      &nbsp;
      <button onClick = {setAgeHandler}>修改年龄</button>
    </div>
  )
}