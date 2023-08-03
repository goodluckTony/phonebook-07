import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
};

const viewModelSlice = createSlice({
  name: 'viewModel',
  initialState,
  reducers: {
    updateViewModel: (state, action) => {
      state.contacts.push(action.payload);
    }
  }
});
export const { updateViewModel } = viewModelSlice.actions;
export default viewModelSlice.reducer;