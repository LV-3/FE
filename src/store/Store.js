import { configureStore } from "@reduxjs/toolkit";
import movieSlice from '../reducer/MovieReducer';
import vodSlice from '../reducer/VodReducer';
import tvSlice from '../reducer/TvReducer';
import { persistReducer } from 'redux-persist'
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';

const reducers = combineReducers({
    Vods: vodSlice.reducer,
    MovieGenres: movieSlice.reducer,
    TvGenres: tvSlice.reducer
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['Vods']
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
});

export default store;