import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { genres } from '../apis/genres/getGenres';


export const getTvs = createAsyncThunk("GetTvs", async ()=>{
    try{
        const result = await genres();
        return result.data
    } catch (error){
        console.log("get Tv Error:", error);
    }
})

const tvSlice = createSlice({
    name: "TvGenres",
    initialState: {
        genreData: []
        // error: '요청에 실패하였습니다.'
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