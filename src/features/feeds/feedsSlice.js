import React from "react";
import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";

const initialState = {
  feeds: [],
  status: "idle",
  error: null,
};

const feedsSlice = createSlice ({
  name: 'feeds'
});
