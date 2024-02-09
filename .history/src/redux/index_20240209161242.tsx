import { combineReducers, configureStore } from "@reduxjs/toolkit";
import messageReducer from "./features/messageSlice";
import commentReducer from "./features/commentSlice";
const rootReducers = combineReducers({
  message: messageReducer,
  comment: commentReducer,
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
