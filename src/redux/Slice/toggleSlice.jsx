import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    isTrue :false
}
const toggleSlice = createSlice({

    name:'Toggle',
    initialState:initialState,
    reducers:{
        isToogle:(state)=>{
            console.log(state)
            state.isTrue = !state.isTrue; 
        }
    }
})

export const {isToogle} =toggleSlice.actions

export default  toggleSlice.reducer