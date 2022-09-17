import React from "react";
import { processShoppingCart } from "../utils";
import ShoppingCartItem from "./ShoppingCart/ShoppingCartItem";
import { CHANGE_SCREEN, UPDATE_CART } from "../redux/types";
import { useDispatch, useSelector } from "react-redux";

const ShoppingCart = () => {
  const { shoppingCartItems, products } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onDeleteCartItem = (id) => {
    const indexOfCartItem = shoppingCartItems.findIndex(
      (item) => item.id === id
    );

    shoppingCartItems.splice(indexOfCartItem, 1);

    dispatch({
      type: UPDATE_CART,
      payload: shoppingCartItems,
    });
  };

  const processedCart = processShoppingCart(products, shoppingCartItems);

  return (
    <>
      <button onClick={() => dispatch({ type: CHANGE_SCREEN })}>
        View products
      </button>

      <h1>£{processedCart.cartTotal.toFixed(2)}</h1>

      {processedCart.shoppingCartItems.map((item) => {
        return (
          item.quantity > 0 && (
            <ShoppingCartItem
              key={item.id}
              item={item}
              onDelete={onDeleteCartItem}
            />
          )
        );
      })}
    </>
  );
};

export default ShoppingCart;
