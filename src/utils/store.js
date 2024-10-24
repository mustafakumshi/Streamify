import { configureStore } from "@reduxjs/toolkit";
import menuBarSlice from "./menuBarSlice";
import searchSlice from "./searchSlice";
import commentSlice from "./commentSlice";

const store = configureStore({
  reducer: {
    menu: menuBarSlice,
    search: searchSlice,
    comment: commentSlice,
  },
});

export default store;
