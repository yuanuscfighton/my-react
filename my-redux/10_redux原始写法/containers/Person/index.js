import React from "react";
import {nanoid} from "nanoid";
import {connect} from "react-redux";
import {createAddPersonAction} from "../../redux/actions/person";

class PersonUI extends React.Component {

  addPerson = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value;
    const personObj = {id: nanoid(), name, age};
    this.props.addPersonFun(personObj);
  }

  render() {
    return (
      <div>
        <h2>Person组件</h2>
        <h4>Count组件求和为:{this.props.sum}</h4>
        <input ref = {c => this.nameNode = c} type = {"text"} placeholder = {"请输入名字"}/>
        <input ref = {c => this.ageNode = c} type = {"text"} placeholder = {"请输入年龄"}/>
        <button onClick = {this.addPerson}>添加</button>
        <ul>
          {
            this.props.ren.map((item) => {
              return <li key = {item.id}>{item.name}--{item.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({ren: state.peiqi, sum: state.he}),
  {
    addPersonFun: createAddPersonAction
  },
)(PersonUI);