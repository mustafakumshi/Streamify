import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
  name: "comment",
  initialState: {
    isReplyOpen: false,
  },
  reducers: {
    toggleReply: (state) => {
      state.isReplyOpen = !state.isReplyOpen;
    },
  },
});

export const { toggleReply } = commentSlice.actions;
export default commentSlice.reducer;
