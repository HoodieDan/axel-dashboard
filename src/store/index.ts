import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import authReducer from "./slices/authSlice";

const store = configureStore({
    reducer: {
        rootReducer,
        auth: authReducer,
      },

});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;




