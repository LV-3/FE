import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { genres } from '../apis/genres/getGenres';


export const getKids = createAsyncThunk("GetKids", async ()=>{
    try{
        const result = await genres();
        return result.data
    } catch (error){
        console.log("get Kids Error:", error);
    }
})

const kidsSlice = createSlice({
    name: "KidsGenres",
    initialState: {
        genreData: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getKids.fulfilled, (state, action)=>{
                state.genreData = action.payload;
            });
    },
});

export default kidsSlice;
