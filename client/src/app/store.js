import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../features/auth/authApi";
import authReducer from "../features/auth/authSlice";
import { userApi } from "../features/user/userApi";
import { swapApi } from "../features/swap/swapApi";
import { feedbackApi } from "../features/feedback/feedbackApi";
import { adminApi } from "../features/admin/adminApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
    [userApi.reducerPath]: userApi.reducer,
    [swapApi.reducerPath]: swapApi.reducer,
    [feedbackApi.reducerPath]: feedbackApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      userApi.middleware,
      swapApi.middleware,
      feedbackApi.middleware,
      adminApi.middleware
    ),
});
