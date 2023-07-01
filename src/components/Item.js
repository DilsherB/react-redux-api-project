import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import data from "./data";

const ItemPage = ({ id }) => {
  const item = useSelector((state) => state.items.find((it) => it.id === id));
  const [showDetails, setShowDetails] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "fetchItem", payload: id });
  }, [id]);

  return (
    <div>
      <h1>{item.name}</h1>
      {showDetails ? (
        <div>
          <p>Description: {item.description}</p>
          <p>Price: {item.price}</p>
        </div>
      ) : (
        <button type="button" onClick={() => setShowDetails(true)}>
          Show Details
        </button>
      )}
    </div>
  );
};

export default ItemPage;
