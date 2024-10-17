
// import { configureStore } from "@reduxjs/toolkit";
// import toggleSlice from "./redux/Slice/toggleSlice";
// import { baseApi } from "./BaseAPi/GenericApi";
// import { paginationSlice } from "./redux/Slice/PaginationSlice";

// export const store = configureStore({
//   reducer: {
//     [baseApi.reducerPath]: baseApi.reducer, // Use baseApi here
//     toggle: toggleSlice,
//     pagintiona:paginationSlice
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(baseApi.middleware), // Include baseApi middleware
// });
import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./redux/Slice/toggleSlice";
import { baseApi } from "./BaseAPi/GenericApi";
import paginationReducer from "./redux/Slice/PaginationSlice";

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer, // Use baseApi here
        toggle: toggleSlice,
        pagintiona: paginationReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware), // Include baseApi middleware
});
