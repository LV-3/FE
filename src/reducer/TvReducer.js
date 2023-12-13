import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTv } from '../apis/genres/getTv';


export const getTvs = createAsyncThunk("GetTvs", async ()=>{
    try{
        const result = await getTv();
        return result.data
    } catch (error){
        console.log("get Tv Error:", error);
    }
})

const tvSlice = createSlice({
    name: "TvGenres",
    initialState: {
        genreData: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTvs.fulfilled, (state, action)=>{
                state.genreData = action.payload;
            });
    },
});

export default tvSlice;