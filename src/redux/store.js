import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer, { getTotals } from "./cartSlice";
import authReducer from "./authSlice";
import productsReducer , { productsFetch } from "./productsSlice"
import { productsApi } from "./productsApi"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers(
  { auth: authReducer,
   cart: cartReducer,
   products: productsReducer,
   [productsApi.reducerPath]: productsApi.reducer,
  });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

store.dispatch(productsFetch());
store.dispatch(getTotals());

export let persistor = persistStore(store);
