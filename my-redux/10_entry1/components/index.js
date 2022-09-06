import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setName, setAge} from '../redux/studentSlice';
import {setSchoolName, setAddress} from "../redux/schoolSlice";

export default function Component() {

  // useSelector() 用来加载state中的数据
  const student = useSelector(state => state.xuesheng);
  const school = useSelector(state => state.xuexiao);

  // 通过useDispatch() 获取派发器的对象
  const dispatch = useDispatch();

  const setNameHandler = () => {
    dispatch(setName("赵六"));
  }

  function setAgeHandler() {
    dispatch(setAge(30));
  }

  function setSchoolNameHandler() {
    dispatch(setSchoolName("学校2"));
  }

  function setAddressHandler() {
    dispatch(setAddress("杭州"));
  }


  return (
    <div>
      <h2>student</h2>
      <p>{JSON.stringify(student)}</p>

      <button onClick = {setNameHandler}>修改名字</button>
      &nbsp;
      &nbsp;
      <button onClick = {setAgeHandler}>修改年龄</button>
      <hr/>
      <h2>school</h2>
      <p>{JSON.stringify(school)}</p>

      <button onClick = {setSchoolNameHandler}>修改学校名字</button>
      &nbsp;
      &nbsp;
      <button onClick = {setAddressHandler}>修改地址</button>
    </div>
  )
}