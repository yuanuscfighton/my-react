import countReducer from './count_reducer';
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

// export default createStore(countReducer);

export default createStore(countReducer, applyMiddleware(thunk));