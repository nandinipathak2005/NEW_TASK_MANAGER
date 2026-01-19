// // import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// // // const API_URL = import.meta.env.VITE_APP_BASE_URL + "/api";
// // const API_URL = "http://localhost:8800/api";

// // const baseQuery = fetchBaseQuery({ baseUrl: API_URL });

// // export const apiSlice = createApi({
// //   baseQuery,
// //   tagTypes: [],
// //   endpoints: (builder) => ({}),
// // });

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// // ✅ Use env variable instead of hard-coding
// const API_URL = import.meta.env.VITE_API_URL + "/api";

// export const apiSlice = createApi({
//   baseQuery: fetchBaseQuery({
//     baseUrl: API_URL,
//     credentials: "include", // ✅ required for cookies/auth
//   }),
//   tagTypes: [],
//   endpoints: () => ({}),
// });
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = import.meta.env.VITE_API_URL + "/api";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    credentials: "include",
  }),
  tagTypes: ["Tasks"],   // ✅ add this
  endpoints: () => ({}),
});

