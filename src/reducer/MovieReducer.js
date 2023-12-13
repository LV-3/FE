import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { genres } from '../apis/genres/getGenres';


export const getMovies = createAsyncThunk("GetMovies", async ()=>{
    try{
        const result = await genres();
        return result.data
    } catch (error){
        console.log("get Movies Error:", error);
    }
})

const movieSlice = createSlice({
    name: "MovieGenres",
    initialState: {
        genreData: [],
        //status: 'loading'
        // error: '요청에 실패하였습니다.'
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // .addCase(getMovies.pending, (state)=>{
            //     state.status = 'loading';
            // })
            .addCase(getMovies.fulfilled, (state, action)=>{
                state.genreData = action.payload;
                // state.status = 'complete';
            });
    },
});

export default movieSlice;
