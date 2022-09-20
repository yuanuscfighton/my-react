import {configureStore} from "@reduxjs/toolkit";
import {personReducer} from './slices/person';
import {schoolReducer} from "./slices/school";

const store = configureStore({
  reducer: {
    ren: personReducer,
    xuexiao: schoolReducer,
  },
});

export default store;