import { configureStore } from "@reduxjs/toolkit";
import groceryBudSlice from "./features/grocery bud/groceryBudSlice";
import { tasksApi } from "./api/tasksApi";

export const store = configureStore({
  reducer: { groceryBudSlice, [tasksApi.reducerPath]: tasksApi.reducer },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tasksApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
