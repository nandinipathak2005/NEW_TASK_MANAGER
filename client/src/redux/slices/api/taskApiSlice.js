// import { TASKS_URL } from "../../../utils/contants";
// import { apiSlice } from "../apiSlice";

// export const postApiSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     createTask: builder.mutation({
//       query: (data) => ({
//         url: `${TASKS_URL}/create`,
//         method: "POST",
//         body: data,
//         credentials: "include",
//       }),
//     }),

//     duplicateTask: builder.mutation({
//       query: (id) => ({
//         url: `${TASKS_URL}/duplicate/${id}`,
//         method: "POST",
//         body: {},
//         credentials: "include",
//       }),
//     }),

//     updateTask: builder.mutation({
//       query: (data) => ({
//         url: `${TASKS_URL}/update/${data._id}`,
//         method: "PUT",
//         body: data,
//         credentials: "include",
//       }),
//     }),

//     getAllTask: builder.query({
//       query: ({ strQuery, isTrashed, search }) => ({
//         url: `${TASKS_URL}?stage=${strQuery}&isTrashed=${isTrashed}&search=${search}`,
//         method: "GET",
//         credentials: "include",
//       }),
//     }),

//     getSingleTask: builder.query({
//       query: (id) => ({
//         url: `${TASKS_URL}/${id}`,
//         method: "GET",
//         credentials: "include",
//       }),
//     }),

//     createSubTask: builder.mutation({
//       query: ({ data, id }) => ({
//         url: `${TASKS_URL}/create-subtask/${id}`,
//         method: "PUT",
//         body: data,
//         credentials: "include",
//       }),
//     }),

//     postTaskActivity: builder.mutation({
//       query: ({ data, id }) => ({
//         url: `${TASKS_URL}/activity/${id}`,
//         method: "POST",
//         body: data,
//         credentials: "include",
//       }),
//     }),

//     trashTast: builder.mutation({
//       query: ({ id }) => ({
//         url: `${TASKS_URL}/${id}`,
//         method: "PUT",
//         credentials: "include",
//       }),
//     }),

//     deleteRestoreTast: builder.mutation({
//       query: ({ id, actionType }) => ({
//         url: `${TASKS_URL}/delete-restore/${id}?actionType=${actionType}`,
//         method: "DELETE",
//         credentials: "include",
//       }),
//     }),

//     getDasboardStats: builder.query({
//       query: () => ({
//         url: `${TASKS_URL}/dashboard`,
//         method: "GET",
//         credentials: "include",
//       }),
//     }),

//     changeTaskStage: builder.mutation({
//       query: (data) => ({
//         url: `${TASKS_URL}/change-stage/${data?.id}`,
//         method: "PUT",
//         body: data,
//         credentials: "include",
//       }),
//     }),

//     changeSubTaskStatus: builder.mutation({
//       query: (data) => ({
//         url: `${TASKS_URL}/change-status/${data?.id}/${data?.subId}`,
//         method: "PUT",
//         body: data,
//         credentials: "include",
//       }),
//     }),
//   }),
// });

// export const {
//   usePostTaskActivityMutation,
//   useCreateTaskMutation,
//   useGetAllTaskQuery,
//   useCreateSubTaskMutation,
//   useTrashTastMutation,
//   useDeleteRestoreTastMutation,
//   useDuplicateTaskMutation,
//   useUpdateTaskMutation,
//   useGetSingleTaskQuery,
//   useGetDasboardStatsQuery,
//   useChangeTaskStageMutation,
//   useChangeSubTaskStatusMutation,
// } = postApiSlice;
import { TASKS_URL } from "../../../utils/contants";
import { apiSlice } from "../apiSlice";

export const taskApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    createTask: builder.mutation({
      query: (data) => ({
        url: `${TASKS_URL}/create`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Tasks"],
    }),

    duplicateTask: builder.mutation({
      query: (id) => ({
        url: `${TASKS_URL}/duplicate/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["Tasks"],
    }),

    updateTask: builder.mutation({
      query: (data) => ({
        url: `${TASKS_URL}/update/${data._id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Tasks"],
    }),

    getAllTask: builder.query({
      query: ({ strQuery, isTrashed, search }) => ({
        url: `${TASKS_URL}?stage=${strQuery}&isTrashed=${isTrashed}&search=${search}`,
      }),
      providesTags: ["Tasks"],
    }),

    getSingleTask: builder.query({
      query: (id) => `${TASKS_URL}/${id}`,
      providesTags: ["Tasks"],
    }),

    createSubTask: builder.mutation({
      query: ({ data, id }) => ({
        url: `${TASKS_URL}/create-subtask/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Tasks"],
    }),

    // ✅ 🔥 THIS WAS MISSING
    postTaskActivity: builder.mutation({
      query: ({ data, id }) => ({
        url: `${TASKS_URL}/activity/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Tasks"],
    }),

    trashTast: builder.mutation({
      query: ({ id }) => ({
        url: `${TASKS_URL}/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["Tasks"],
    }),

    deleteRestoreTast: builder.mutation({
      query: ({ id, actionType }) => ({
        url: `${TASKS_URL}/delete-restore/${id}?actionType=${actionType}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tasks"],
    }),

    getDasboardStats: builder.query({
      query: () => `${TASKS_URL}/dashboard`,
      providesTags: ["Tasks"],
    }),

    changeTaskStage: builder.mutation({
      query: (data) => ({
        url: `${TASKS_URL}/change-stage/${data.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Tasks"],
    }),

    changeSubTaskStatus: builder.mutation({
      query: (data) => ({
        url: `${TASKS_URL}/change-status/${data.id}/${data.subId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Tasks"],
    }),
  }),
});

export const {
  useCreateTaskMutation,
  useDuplicateTaskMutation,
  useUpdateTaskMutation,
  useGetAllTaskQuery,
  useGetSingleTaskQuery,
  useCreateSubTaskMutation,
  usePostTaskActivityMutation, // ✅ NOW EXISTS
  useTrashTastMutation,
  useDeleteRestoreTastMutation,
  useGetDasboardStatsQuery,
  useChangeTaskStageMutation,
  useChangeSubTaskStatusMutation,
} = taskApiSlice;
