import { createSlice } from "@reduxjs/toolkit";

export const studentDetails = createSlice({
    name: 'studentDetails',
    initialState:{
        students: [],
        loading: false,
        error: null,
    },

});

export default studentDetails.reducer;
