import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getWeather } from '../apis/main/getweather';

export const getWeathers = createAsyncThunk("GetWeathers", async ()=>{
    try{
        const result = await getWeather();
        return result.data
    } catch (error){
        console.log("Weather Error:", error);
    }
})

const weatherSlice = createSlice({
    name: "Weathers",
    initialState: {
        vodData: {},
        error: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getWeathers.fulfilled, (state, action)=>{
                state.vodData = action.payload;
            })
            .addCase(getWeathers.rejected, (state)=>{
                state.error = true;
            })
    },
});

export default weatherSlice;
