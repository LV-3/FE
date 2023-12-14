import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getReplay } from '../apis/mypage/getmypagereplay_post';

export const getReplays = createAsyncThunk("GetReplay", async (subsr)=>{
    try{
        const result = await getReplay(subsr);
        return result.data
    } catch (error){
        console.log('Replay Error', error);
    }
})

const replaySlice = createSlice({
    name: "Replays",
    initialState: {
        vodData: [],
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getReplays.fulfilled, (state, action)=>{
                state.vodData = action.payload;
                state.error = null;
            })
            .addCase(getReplays.rejected, (state)=>{
                state.error = -1;
            })
    },
});

export default replaySlice;
