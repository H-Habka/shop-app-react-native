import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsSlice from "./features/productsSlice";

const rootReducer = combineReducers({
    productsSlice,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleWare) =>
        getDefaultMiddleWare({ serializableCheck: false }),
});
