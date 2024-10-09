import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ProfileState {
  userData: object | string;
}

const initialState: ProfileState = {
  userData: {},

};

export const ProfileSlice = createSlice({
  name: "Profile",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<object>) => {
      state.userData = action.payload;
      console.log("userdata in profile slice", state.userData);
      // Save userData to AsyncStorage when updated
      AsyncStorage.setItem("userData", JSON.stringify(action.payload));
    },
  },
});

export const { setUserData } = ProfileSlice.actions;

export default ProfileSlice.reducer;
