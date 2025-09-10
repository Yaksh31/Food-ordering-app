import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/CartSlice.js";
import categoryReducer from "./Slices/CategorySlice.js";
import searchReducer from "./Slices/SearchSlice.js";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    category: categoryReducer,
    search: searchReducer,
  },
});

export default store;
