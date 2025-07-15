import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/AuthSlice/authSlice";
import tableReducer from "./Slices/TableSlice/tableSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    table: tableReducer,
  },
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
