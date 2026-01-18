// // import { USERS_URL } from "../../../utils/contants";
// // import { apiSlice } from "../apiSlice";

// // export const userApiSlice = apiSlice.injectEndpoints({
// //   endpoints: (builder) => ({
// //     updateUser: builder.mutation({
// //       query: (data) => ({
// //         url: `${USERS_URL}/profile`,
// //         method: "PUT",
// //         body: data,
// //         credentials: "include",
// //       }),
// //     }),

// //     getTeamLists: builder.query({
// //       query: ({ search }) => ({
// //         url: `${USERS_URL}/get-team?search=${search}`,
// //         method: "GET",
// //         credentials: "include",
// //       }),
// //     }),

// //     getUserTaskStatus: builder.query({
// //       query: () => ({
// //         url: `${USERS_URL}/get-status`,
// //         method: "GET",
// //         credentials: "include",
// //       }),
// //     }),

// //     getNotifications: builder.query({
// //       query: () => ({
// //         url: `${USERS_URL}/notifications`,
// //         method: "GET",
// //         credentials: "include",
// //       }),
// //     }),

// //     deleteUser: builder.mutation({
// //       query: (id) => ({
// //         url: `${USERS_URL}/${id}`,
// //         method: "DELETE",
// //         credentials: "include",
// //       }),
// //     }),

// //     userAction: builder.mutation({
// //       query: (data) => ({
// //         url: `${USERS_URL}/${data?.id}`,
// //         method: "PUT",
// //         body: data,
// //         credentials: "include",
// //       }),
// //     }),

// //     markNotiAsRead: builder.mutation({
// //       query: (data) => ({
// //         url: `${USERS_URL}/read-noti?isReadType=${data.type}&id=${data?.id}`,
// //         method: "PUT",
// //         body: data,
// //         credentials: "include",
// //       }),
// //     }),

// //     changePassword: builder.mutation({
// //       query: (data) => ({
// //         url: `${USERS_URL}/change-password`,
// //         method: "PUT",
// //         body: data,
// //         credentials: "include",
// //       }),
// //     }),
// //   }),
// // });

// // export const {
// //   useUpdateUserMutation,
// //   useGetTeamListsQuery,
// //   useDeleteUserMutation,
// //   useUserActionMutation,
// //   useChangePasswordMutation,
// //   useGetNotificationsQuery,
// //   useMarkNotiAsReadMutation,
// //   useGetUserTaskStatusQuery,
// // } = userApiSlice;
// import { USERS_URL } from "../../../utils/contants";
// import { apiSlice } from "../apiSlice";

// export const userApiSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     updateUser: builder.mutation({
//       query: (data) => ({
//         url: `${USERS_URL}/profile`,
//         method: "PUT",
//         body: data,
//         credentials: "include",
//       }),
//     }),

//     // Add User Mutation (NEW)
//     addUser: builder.mutation({
//       query: (userData) => ({
//         url: `${USERS_URL}/register`,
//         method: "POST",
//         body: userData,
//         credentials: "include",
//       }),
//       invalidatesTags: ["Users"],
//     }),

//     getTeamLists: builder.query({
//       query: ({ search }) => ({
//         url: `${USERS_URL}/get-team?search=${search}`,
//         method: "GET",
//         credentials: "include",
//       }),
//       providesTags: ["Users"],
//     }),

//     getUserTaskStatus: builder.query({
//       query: () => ({
//         url: `${USERS_URL}/get-status`,
//         method: "GET",
//         credentials: "include",
//       }),
//     }),

//     getNotifications: builder.query({
//       query: () => ({
//         url: `${USERS_URL}/notifications`,
//         method: "GET",
//         credentials: "include",
//       }),
//     }),

//     deleteUser: builder.mutation({
//       query: (id) => ({
//         url: `${USERS_URL}/${id}`,
//         method: "DELETE",
//         credentials: "include",
//       }),
//       invalidatesTags: ["Users"], // optional but recommended
//     }),

//     userAction: builder.mutation({
//       query: (data) => ({
//         url: `${USERS_URL}/${data?.id}`,
//         method: "PUT",
//         body: data,
//         credentials: "include",
//       }),
//       invalidatesTags: ["Users"], // optional but recommended
//     }),

//     markNotiAsRead: builder.mutation({
//       query: (data) => ({
//         url: `${USERS_URL}/read-noti?isReadType=${data.type}&id=${data?.id}`,
//         method: "PUT",
//         body: data,
//         credentials: "include",
//       }),
//     }),

//     changePassword: builder.mutation({
//       query: (data) => ({
//         url: `${USERS_URL}/change-password`,
//         method: "PUT",
//         body: data,
//         credentials: "include",
//       }),
//     }),
//   }),
// });

// export const {
//   useUpdateUserMutation,
//   useAddUserMutation, // <-- add this
//   useGetTeamListsQuery,
//   useDeleteUserMutation,
//   useUserActionMutation,
//   useChangePasswordMutation,
//   useGetNotificationsQuery,
//   useMarkNotiAsReadMutation,
//   useGetUserTaskStatusQuery,
// } = userApiSlice;
 import { USERS_URL } from "../../../utils/contants";
import { apiSlice } from "../apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: "PUT",
        body: data,
        credentials: "include",
      }),
    }),

    addUser: builder.mutation({
      query: (userData) => ({
        url: `${USERS_URL}/register`,
        method: "POST",
        body: userData,
        credentials: "include",
      }),
      invalidatesTags: ["Users"],
    }),

    getTeamLists: builder.query({
      query: ({ search }) => ({
        url: `${USERS_URL}/get-team?search=${search}`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["Users"],
    }),

    getUserTaskStatus: builder.query({
      query: () => ({
        url: `${USERS_URL}/get-status`,
        method: "GET",
        credentials: "include",
      }),
    }),

    getNotifications: builder.query({
      query: () => ({
        url: `${USERS_URL}/notifications`,
        method: "GET",
        credentials: "include",
      }),
    }),

    deleteUser: builder.mutation({
      query: (id) => ({
        url: `${USERS_URL}/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["Users"],
    }),

    userAction: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/${data?.id}`,
        method: "PUT",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["Users"],
    }),

    markNotiAsRead: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/read-noti?isReadType=${data.type}&id=${data?.id}`,
        method: "PUT",
        body: data,
        credentials: "include",
      }),
    }),

    changePassword: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/change-password`,
        method: "PUT",
        body: data,
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useUpdateUserMutation,
  useAddUserMutation,
  useGetTeamListsQuery,
  useDeleteUserMutation,
  useUserActionMutation,
  useChangePasswordMutation,
  useGetNotificationsQuery,
  useMarkNotiAsReadMutation,
  useGetUserTaskStatusQuery,
} = userApiSlice;
