import { combineReducers, configureStore } from "@reduxjs/toolkit";
import messageReducer from "./features/messageSlice";
import commentReducer from "./features/commentSlice";
import loadingReducer from "./features/loadingSlice";
const rootReducers = combineReducers({
  message: messageReducer,
  comment: commentReducer,
  loading: loadingReducer,
});

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
