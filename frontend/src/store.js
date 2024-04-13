import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { apiSlice } from "./slices/apiSlice";
const reducer = combineReducers({
  // here we will be adding reducers
});
const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true,
});
export default store;
