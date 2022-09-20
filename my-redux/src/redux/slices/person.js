import {createSlice} from "@reduxjs/toolkit";

const personSlice = createSlice({
  name: 'per',
  initialState: {
    name: "小明",
    age: 1,
    city: "地球",
  },
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setAge(state, action) {
      state.age = action.payload;
    },
    setCity(state, action) {
      state.city = action.payload;
    },
  },
});

export const {setName, setAge, setCity} = personSlice.actions;
export const personReducer = personSlice.reducer;