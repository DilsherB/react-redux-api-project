import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducers: {
    items: (state = [], action) => {
      switch (action.type) {
        case "fetchItems":
          return action.payload;
        default:
          return state;
      }
    },
  },
});
