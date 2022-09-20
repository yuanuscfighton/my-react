import {applyMiddleware, combineReducers, createStore} from "redux";
import {personReducer} from "./reducers/person";
import thunk from "redux-thunk";
import countReducer from "./reducers/count";

// export default createStore(countReducer);

// export default createStore(countReducer, applyMiddleware(thunk));

const allReducers = combineReducers({
  he: countReducer,
  peiqi: personReducer,
});

export default createStore(allReducers, applyMiddleware(thunk));