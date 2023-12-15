import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { tvGenreList } from '../apis/genres/getTvGenreList';

export const getTvGenres = createAsyncThunk("GetTvGenres", async ()=>{
    try{
        const result = await tvGenreList();
        return result.data
    } catch (error){
        console.log("get Tv Genre List Error:", error);
    }
})

const tvGenreSlice = createSlice({
    name: "TvGenreLists",
    initialState: {
        genreData: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTvGenres.fulfilled, (state, action)=>{
                state.genreData = action.payload;
            });
    },
});

export default tvGenreSlice;


