import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getKid } from '../apis/genres/getKid';


export const getKids = createAsyncThunk("GetKids", async ()=>{
    try{
        const result = await getKid();
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
