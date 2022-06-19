// 引入Count的UI组件
import CountUI from '../../components/Count'
// 引入connect用于连接UI组件和redux
import {connect} from "react-redux";
import {createDecrementAction, createIncrementAction, createIncrementAsyncAction} from "../../redux/count_action";

// 映射状态
// function mapStateToProps(state) {
//   return {count: state};
// }

// 优化
const mapStateToProps = state => ({count: state});


// 映射操作状态的方法
// function mapDispatchToProps(dispatch) {
//   return {
//     add: (number) => {
//       dispatch(createIncrementAction(number));
//     },
//     minus: number => dispatch(createDecrementAction(number)),
//     addAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time)),
//   }
// }

// 优化
const mapDispatchToProps = dispatch => (
  {
    add: (number) => {
      dispatch(createIncrementAction(number));
    },
    minus: number => dispatch(createDecrementAction(number)),
    addAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time)),
  }
);

const CountContainer = connect(mapStateToProps, mapDispatchToProps)(CountUI);

export default CountContainer;

