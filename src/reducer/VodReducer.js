import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { allVods } from '../apis/main/getmain_post';

export const getVODs = createAsyncThunk("GetVods", async (subsr, { rejectWithValue })=>{
    try{
        const result = await allVods(subsr);
        //console.log('result', result);
        console.log('result.data', result.data)
        return result.data
    } catch (error){
        console.log("VodError:", error);
        console.log('error.response.status : ', error.response.status)
        return rejectWithValue(error.response.status);
    }
})

const vodSlice = createSlice({
    name: "Vods",
    initialState: {
        vodData: {},
        status: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getVODs.pending, (state)=> {
                state.status = true;
                state.error = null;
            })
            .addCase(getVODs.fulfilled, (state, action)=>{
                state.vodData = action.payload;
                state.status = false;
                state.error = null;
            })
            .addCase(getVODs.rejected, (state, action)=>{
                state.error = action.payload;
                state.status = false;
            })
    },
});

export default vodSlice;
