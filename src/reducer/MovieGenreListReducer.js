import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movieGenreList } from '../apis/genres/getMovieGenreList';


export const getMovieGenres = createAsyncThunk("GetMovieGenres", async ()=>{
    try{
        const result = await movieGenreList();
        return result.data
    } catch (error){
        console.log("get Movie Genre List Error:", error);
    }
})

const movieGenreSlice = createSlice({
    name: "MovieGenreLists",
    initialState: {
        genreData: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMovieGenres.fulfilled, (state, action)=>{
                state.genreData = action.payload;
            });
    },
});

export default movieGenreSlice;


