import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    // reducerPath ta store.ts e send korte hobe
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    // tagTypes, providesTags, invalidatesTags ta dia sathe sathe reload hoye data add hoye jai
    tagTypes: ["task"],
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => "/tasks",
            // providesTags ta dia sathe sathe reload hoye data add hoye jai
            providesTags: ["task"]
        }),
        createTasks: builder.mutation({
            // backend e jemon object disse ekhaneo object send korte hobe
            query: (taskData) => ({
                url: "/tasks",
                method: "POST",
                body: taskData,
            }),
            // invalidatesTags ta dia sathe sathe reload hoye data add hoye jai
            invalidatesTags: ["task"],
        }),
    }),
});

export const { useGetTasksQuery, useCreateTasksMutation } = baseApi; 