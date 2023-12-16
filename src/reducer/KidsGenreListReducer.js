import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { kidGenreList } from '../apis/genres/getKidGenreList';


export const getKidGenres = createAsyncThunk("GetKidGenres", async ()=>{
    try{
        const result = await kidGenreList();
        return result.data
    } catch (error){
        console.log("get Kids Genre List Error:", error);
    }
})

const kidGenreSlice = createSlice({
    name: "KidGenreLists",
    initialState: {
        genreData: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getKidGenres.fulfilled, (state, action)=>{
                state.genreData = action.payload;
            });
    },
});

export default kidGenreSlice;


