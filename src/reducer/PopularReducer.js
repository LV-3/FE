import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPopular } from '../apis/main/getpopular_post';

export const getPopulars = createAsyncThunk("GetPopulars", async ()=>{
    try{
        const result = await getPopular();
        return result.data
    } catch (error){
        console.log("Popular Error:", error);
        throw error;
    }
})

const popularSlice = createSlice({
    name: "Populars",
    initialState: {
        vodData: {},
        error: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPopulars.fulfilled, (state, action)=>{
                state.vodData = action.payload;
            })
            .addCase(getPopulars.rejected, (state)=>{
                state.error = true
            })
    },
});

export default popularSlice;
