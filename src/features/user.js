import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {
    value: [],
  },
  reducers: {
    setUser: (state, action) => {
   
      state.value = action.payload;
    },
  },
});

export const { setUser } = user.actions;
export default user.reducer;
