import { configureStore } from "@reduxjs/toolkit";
import empReducer from "./slice";
import studentReducer from "./mySlice";

const store = configureStore({
  reducer: {
    emp: empReducer,
    student: studentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;