import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

import ordersReducer from "./orderSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["orders"],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({ orders: ordersReducer })
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
