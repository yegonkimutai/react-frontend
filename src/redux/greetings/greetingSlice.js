import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  greetings: []
};

export const fetchGreetings = createAsyncThunk(
  "greetings/fetchGreetings",
  async () => {
    const response = await fetch('http://127.0.0.1:3000/messages');
    const data = await response.json();
    return data;
  }
);

const greetingSlice = createSlice({
  name: "greetings",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchGreetings.fulfilled, (state, action) => {
        state.greetings = action.payload;
      })
  },
});

export default greetingSlice.reducer;