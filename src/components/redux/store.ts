import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./slicer/authSlice";
import scrollStopperReducer from "./slicer/scrollStopper";

export const store = configureStore({
  reducer: {
    scrollStopper: scrollStopperReducer,
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
