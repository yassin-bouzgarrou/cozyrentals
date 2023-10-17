
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: null,
    loading: false,
  },
  reducers: {
    fetchUserDataStart: (state) => {
      state.loading = true;
    },
    fetchUserDataSuccess: (state, action) => {
      state.loading = false;
      state.userData = action.payload;
    },
    fetchUserDataFailure: (state) => {
      state.loading = false;
    },
  },
});

export const { fetchUserDataStart, fetchUserDataSuccess, fetchUserDataFailure } = userSlice.actions;
export default userSlice.reducer;
