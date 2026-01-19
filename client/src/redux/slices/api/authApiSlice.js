// import { USERS_URL } from "../../../utils/contants";
// import { apiSlice } from "../apiSlice";

// export const authApiSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     login: builder.mutation({
//       query: (data) => ({
//         url: `${USERS_URL}/login`,
//         method: "POST",
//         body: data,
//         credentials: "include",
//       }),
//     }),
//     register: builder.mutation({
//       query: (data) => ({
//         url: `${USERS_URL}/register`,
//         method: "POST",
//         body: data,
//         credentials: "include",
//       }),
//     }),
//     logout: builder.mutation({
//       query: () => ({
//         url: `${USERS_URL}/logout`,
//         method: "POST",
//         credentials: "include",
//       }),
//     }),
//   }),
// });

// export const { useLoginMutation, useRegisterMutation, useLogoutMutation } =
//   authApiSlice;
import { USERS_URL } from "../../../utils/contants";
import { apiSlice } from "../apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    // 🔐 LOGIN
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;

          // 🔥 CLEAR OLD USER CACHE (VERY IMPORTANT)
          dispatch(apiSlice.util.resetApiState());
        } catch (err) {
          console.error("Login cache reset failed", err);
        }
      },
    }),

    // 👤 REGISTER
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/register`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),

    // 🚪 LOGOUT
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
        credentials: "include",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;

          // 🔥 CLEAR EVERYTHING (TASKS, DASHBOARD, TEAM, NOTIFS)
          dispatch(apiSlice.util.resetApiState());
        } catch (err) {
          console.error("Logout cache reset failed", err);
        }
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
} = authApiSlice;
