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
    this.props.addPersonXxx(personObj);
    this.nameNode.value = '';
    this.ageNode.value = '';
  }

  render() {
    return (
      <div>
        <h2>我是Person组件</h2>
        <h4>Count组件求和为:{this.props.sumXxx}</h4>
        <input ref = {c => this.nameNode = c} type = "text" placeholder = "输入名字"/>
        <input ref = {c => this.ageNode = c} type = "text" placeholder = "输入年龄"/>
        <button onClick = {this.addPerson}>添加</button>
        <ul>
          {
            this.props.pXxx.map((item) => {
              return <li key = {item.id}>{item.name}--{item.age}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default connect(
  // 需要写成state.peiqi，state.he 否则会报错:
  // ❌ Uncaught Error: Objects are not valid as a React child (found: object with keys {sum, persons}).
  // If you meant to render a collection of children, use an array instead.
  // Object是不能作为一个节点的，即要把一个对象往页面上放
  // 上面代码就是合并了reducer，导致redux中保存的总状态就是一个对象了，以前是一个数值或者...，见使用的地方 containers/Count/index.jsx
  state => ({pXxx: state.peiqi, sumXxx: state.he}), // 映射状态
  {addPersonXxx: createAddPersonAction},
)(Person);