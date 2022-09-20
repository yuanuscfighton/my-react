import {createSlice} from "@reduxjs/toolkit";

const schoolSlice = createSlice({
  name: 'school',
  initialState: {
    name: "学校1",
    address: '上海',
  },
  reducers: {
    setSchoolName(state, action) {
      state.name = action.payload;
    },
    setAddress(state, action) {
      state.address = action.payload;
    }
  }
});

export const {setSchoolName, setAddress} = schoolSlice.actions;

export const {reducer: schoolReducer} = schoolSlice;