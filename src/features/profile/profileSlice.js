import { createSlice } from "@reduxjs/toolkit";
import { logout } from "../auth/authSlice";

const initialState = {
  fullName: null,
  workEmail: null,
  role: null
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile(state, action) {
      state.fullName = action.payload.fullName;
      state.workEmail = action.payload.workEmail;
      state.role = action.payload.role;
    },
    clearProfile() {
      return initialState;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(logout, () => initialState);
  }
})

export const { setProfile, clearProfile } = profileSlice.actions;
export default profileSlice.reducer;