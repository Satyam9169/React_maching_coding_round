import { configureStore } from "@reduxjs/toolkit"
import counterReducer from './feature/counter/counterSlice'
import userReducer from "./feature/user/userSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer
    }
});

export default store;