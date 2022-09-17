import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "./Product";
import ShoppingCart from "./ShoppingCart";

import { CHANGE_SCREEN, UPDATE_SEARCHTERM } from "../redux/types";

const Interface = () => {
  const dispatch = useDispatch();
  const { products, filter, screen } = useSelector((state) => state);

  const filtered = [...products].filter((product) => {
    //work out if the product matches the search term
    return product.title.toLowerCase().includes(filter.toLowerCase());
  });

  const results = filtered.length > 0 ? filtered : products;

  return screen === 0 ? (
    <>
      <button onClick={() => dispatch({ type: CHANGE_SCREEN })}>
        View shopping cart
      </button>

      <input
        type="text"
        onInput={(e) => {
          dispatch({
            type: UPDATE_SEARCHTERM,
            payload: e.target.value,
          });
        }}
      />

      {results.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  ) : (
    <ShoppingCart />
  );
};

export default Interface;
