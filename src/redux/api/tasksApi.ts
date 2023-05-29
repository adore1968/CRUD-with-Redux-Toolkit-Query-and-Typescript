import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Task } from "../../interfaces/types";

const url = "http://localhost:3000/";

export const tasksApi = createApi({
  reducerPath: "tasksApi",
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  tagTypes: ["tasks"],
  endpoints: (builder) => ({
    getTasks: builder.query<Task[], null>({
      query: () => "tasks",
      providesTags: ["tasks"],
    }),

    createTask: builder.mutation<null, Task>({
      query: (task) => ({
        url: "tasks",
        method: "POST",
        body: task,
      }),
      invalidatesTags: ["tasks"],
    }),

    updateTask: builder.mutation<null, Task>({
      query: (task) => ({
        url: `tasks/${task.id}`,
        method: "PATCH",
        body: { name: task.name },
      }),
      invalidatesTags: ["tasks"],
    }),

    deleteTask: builder.mutation<null, string>({
      query: (id) => ({
        url: `tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["tasks"],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = tasksApi;
