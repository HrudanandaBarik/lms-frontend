import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from './Slices/AuthSlice';
import courseSliceReducer from "./Slices/CourseSlice";

const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        course: courseSliceReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    devTools: true
});

export default store;