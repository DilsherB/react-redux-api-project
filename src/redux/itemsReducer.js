const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case "fetchItems":
      return action.payload;
    default:
      return state;
  }
};

export default itemsReducer;
