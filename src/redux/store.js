import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./itemsReducer";

const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});

export default store;
