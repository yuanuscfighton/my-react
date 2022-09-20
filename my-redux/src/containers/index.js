import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setAge, setCity, setName} from "../redux/slices/person";
import {setSchoolName, setAddress} from "../redux/slices/school";

export default function UI() {

  let cityInputRef = null;
  const person = useSelector(state => state.ren);
  const school = useSelector(state => state.xuexiao);
  const dispatch = useDispatch();

  const setNameHandler = () => {
    dispatch(setName("张三"));
  }

  const setAgeHandler = () => {
    dispatch(setAge(20));
  }

  const setChangeCityHandler = () => {
    const city = cityInputRef.value;
    dispatch(setCity(city));
  }

  const setSchoolNameHandler = () => {
    dispatch(setSchoolName("学校A"));
  }

  const setAddressHandler = () => {
    dispatch(setAddress("上海"));
  }


  return (
    <div>
      <p>名字: {person.name}, 年龄: {person.age}, 城市: {person.city} </p>
      <p>学校名字: {school.name}, 地址: {school.address}</p>

      <button onClick = {setNameHandler}>修改名字</button>
      &nbsp;
      &nbsp;
      <button onClick = {setAgeHandler}>修改年龄</button>
      &nbsp;
      &nbsp;
      <input ref = {c => cityInputRef = c}/>
      &nbsp;
      &nbsp;
      <button onClick = {setChangeCityHandler}>确认修改城市</button>
      <button onClick = {setSchoolNameHandler}>修改学校名字</button>
      &nbsp;
      &nbsp;
      <button onClick = {setAddressHandler}>修改地址</button>
    </div>
  )
}