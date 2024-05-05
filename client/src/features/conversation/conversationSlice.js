import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedConversation: "",
  messages: [],
};

export const conversationSlice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    setSelectedConversation: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.selectedConversation = action.payload;
    },
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSelectedConversation, setMessages } =
  conversationSlice.actions;

export default conversationSlice.reducer;
