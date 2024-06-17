import { configureStore } from "@reduxjs/toolkit";
import authReducer from './AuthSlice'
import emailReducer from './EmailSlice'

const store = configureStore({
    reducer:{auth: authReducer, emailState: emailReducer}
});

export default store;