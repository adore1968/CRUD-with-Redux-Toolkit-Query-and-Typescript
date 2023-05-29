import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GroceryBudStates, Task } from "../../../interfaces/types";
import { toast } from "react-toastify";

const taskInitialState = { id: "", name: "" };

const initialState: GroceryBudStates = {
  task: taskInitialState,
  isUpdate: false,
};

export const notify = (type: string, message: string) => {
  if (type === "success") {
    toast.success(message, { theme: "colored" });
  } else {
    toast.error(message, { theme: "colored" });
  }
};

const groceryBudSlice = createSlice({
  name: "groceryBudSlice",
  initialState,
  reducers: {
    changeTask: (state, action: PayloadAction<string>) => {
      const newTask = { ...state.task, name: action.payload };
      return { ...state, task: newTask };
    },

    setUpdateStates: (state, action: PayloadAction<Task>) => {
      return { ...state, task: action.payload, isUpdate: true };
    },

    clearForm: (state) => {
      return { ...state, task: taskInitialState, isUpdate: false };
    },
  },
});

export default groceryBudSlice.reducer;
export const { changeTask, clearForm, setUpdateStates } =
  groceryBudSlice.actions;
