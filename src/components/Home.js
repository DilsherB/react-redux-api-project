import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import data from "./data";

const HomePage = () => {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "fetchItems" });
  }, [dispatch]);

  return (
    <div>
      <h1>Home Page</h1>
      {items.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <button
            type="button"
            onClick={() => dispatch({ type: "showItem", payload: item.id })}
          >
            Show More
          </button>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
