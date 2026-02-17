import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";

interface Employee {
  id: string;
  name: string;
  email?: string; // Assuming email is optional based on API
}

interface EmpState {
  employees: Employee[];
  isLoading: boolean;
  error: string | null;
  employeesData: Employee[];
}

const initialState: EmpState = {
  employees: [],
  isLoading: false,
  error: null,
  employeesData: [],
};

export const apiData = createAsyncThunk<Employee[], void>(
  "employees/fetchData",
  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  }
);

const empSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push({
        id: nanoid(),
        name: action.payload,
      });
    },
    removeEmployee: (state, action) => {
      state.employees = state.employees.filter(
        (emp) => emp.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(apiData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(apiData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.employeesData = action.payload;
      })
      .addCase(apiData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "An error occurred";
      });
  },
});

export const { addEmployee, removeEmployee } = empSlice.actions;
export default empSlice.reducer;