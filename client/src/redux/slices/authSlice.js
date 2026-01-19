// // import { createSlice } from "@reduxjs/toolkit";

// // const initialState = {
// //   user: localStorage.getItem("userInfo")
// //     ? JSON.parse(localStorage.getItem("userInfo"))
// //     : null,

// //   isSidebarOpen: false,
// // };

// // const authSlice = createSlice({
// //   name: "auth",
// //   initialState,
// //   reducers: {
// //     setCredentials: (state, action) => {
// //       state.user = action.payload;
// //       localStorage.setItem("userInfo", JSON.stringify(action.payload));
// //     },
// //     logout: (state, action) => {
// //       state.user = null;
// //       localStorage.removeItem("userInfo");
// //     },
// //     setOpenSidebar: (state, action) => {
// //       state.isSidebarOpen = action.payload;
// //     },
// //   },
// // });

// // export const { setCredentials, logout, setOpenSidebar } = authSlice.actions;

// // export default authSlice.reducer;
// import { createSlice } from "@reduxjs/toolkit";
// import { apiSlice } from "./apiSlice"; // ✅ correct path

// const initialState = {
//   user: localStorage.getItem("userInfo")
//     ? JSON.parse(localStorage.getItem("userInfo"))
//     : null,
//   isSidebarOpen: false,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setCredentials: (state, action) => {
//       state.user = action.payload;
//       localStorage.setItem("userInfo", JSON.stringify(action.payload));
//     },
//     logout: (state) => {
//       state.user = null;
//       localStorage.removeItem("userInfo");
//     },
//     setOpenSidebar: (state, action) => {
//       state.isSidebarOpen = action.payload;
//     },
//   },
// });

// export const { setCredentials, logout, setOpenSidebar } = authSlice.actions;

// export default authSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice"; // ✅ correct import

const initialState = {
  user: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  isSidebarOpen: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },

    logout: (state) => {
      state.user = null;
      localStorage.removeItem("userInfo");

      // 🔥 THIS FIXES ADMIN ↔ USER DATA MIXING
      apiSlice.util.resetApiState();
    },

    setOpenSidebar: (state, action) => {
      state.isSidebarOpen = action.payload;
    },
  },
});

export const { setCredentials, logout, setOpenSidebar } = authSlice.actions;
export default authSlice.reducer;
