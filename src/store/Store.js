import { configureStore } from "@reduxjs/toolkit";
import movieSlice from '../reducer/MovieReducer';
import vodSlice from '../reducer/VodReducer';
import tvSlice from '../reducer/TvReducer';
import kidsSlice from '../reducer/KidsReducer';
import { persistReducer } from 'redux-persist'
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage/session';
import replaySlice from "../reducer/ReplayReducer";

const reducers = combineReducers({
    Vods: vodSlice.reducer,
    MovieGenres: movieSlice.reducer,
    TvGenres: tvSlice.reducer,
    KidsGenres: kidsSlice.reducer,
    Replays: replaySlice.reducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['Vods', 'MovieGenres', 'TvGenres', 'KidsGenres', 'Replays']
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false}),
});

export default store;