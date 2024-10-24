import { createSlice } from "@reduxjs/toolkit";

const menuBarSlice = createSlice({
  name: "menu",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = true;
    },
  },
});

export const { toggleMenu, closeMenu } = menuBarSlice.actions;
export default menuBarSlice.reducer;
