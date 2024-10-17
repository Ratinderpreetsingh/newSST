import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentPage: 1,
    totalPages: 937, // Set this to your desired total number of pages
};

export const paginationSlice = createSlice({
    name: 'paginationSlice',
    initialState,
    reducers: {
        handleNextPage: (state) => {
            if (state.currentPage < state.totalPages) {
                state.currentPage += 1;
            }
        },
        handlePreviousPage: (state) => {
            if (state.currentPage > 1) {
                state.currentPage -= 1;
            }
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
    },
});

export const { handleNextPage, handlePreviousPage, setCurrentPage } = paginationSlice.actions;

export default paginationSlice.reducer;
