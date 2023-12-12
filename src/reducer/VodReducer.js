import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { allVods } from '../apis/main/getmain_post';


export const getVODs = createAsyncThunk("GetVods", async (subsr)=>{
    try{
        const result = await allVods(subsr);
        return result.data
    } catch (error){
        console.log("VodError:", error);
    }
})

const vodSlice = createSlice({
    name: "Vods",
    initialState: {
        vodData: {},
        status: false
        // error: '요청에 실패하였습니다.'
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getVODs.pending, (state)=> {
                state.status = true;
            })
            .addCase(getVODs.fulfilled, (state, action)=>{
                state.vodData = action.payload;
                state.status = false;
            });
    },
});

export default vodSlice;
