import React from "react";
import { useDispatch } from "react-redux";
import { UPDATE_CART } from "../../redux/types";

const ShoppingCartItem = (props) => {
  const dispatch = useDispatch();

  return (
    <>
      <p>{props.item.details.title}</p>
      <button
        onClick={() =>
          dispatch({
            type: UPDATE_CART,
            payload: { id: props.item.id, qty: -1 },
          })
        }
      >
        Delete
      </button>
    </>
  );
};

export default ShoppingCartItem;
