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
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getReplays.fulfilled, (state, action)=>{
                state.vodData = action.payload;
                state.error = 0;
            })
    },
});

export default replaySlice;
