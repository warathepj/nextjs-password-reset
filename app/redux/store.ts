// app/redux/store/
import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './features/counter/counterSlice';
// import shoppingBagReducer from './features/shoppingBag/shoppingBagSlice';
import emailReducer from './features/email/emailSlice';
export const store = configureStore({
  reducer: {
    // shoppingBag: shoppingBagReducer,
    email: emailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;