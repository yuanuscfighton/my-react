import React, {Component} from 'react';
import {nanoid} from "nanoid";
import {connect} from "react-redux";
import {createAddPersonAction} from "../../redux/actions/person";

class Person extends Component {

  addPerson = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value;
    const personObj = {id: nanoid(), name, age};
    // console.log(personObj);
    this.props.addPerson(personObj);
    this.nameNode.value = '';
    this.ageNode.value = '';
  }

  render() {
    return (
      <div>
        <h2>我是Person组件</h2>
        <h4>Count组件求和为:{this.props.sum}</h4>
        <input ref = {c => this.nameNode = c} type = "text" placeholder = "输入名字"/>
        <input ref = {c => this.ageNode = c} type = "text" placeholder = "输入年龄"/>
        <button onClick = {this.addPerson}>添加</button>
        <ul>
          {
            this.props.p.map((item) => {
              return <li key = {item.id}>{item.name}--{item.age}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({p: state.persons, sum: state.sum}), // 映射状态
  {addPerson: createAddPersonAction},
)(Person);