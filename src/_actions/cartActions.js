import axios from "axios";
import { useDispatch } from "react-redux";
import { ADD_TO_CART, CLEAR_CART_ITEM, GET_CART_ITEM, REMOVE_CART_ITEM, UPDATE_CART_ITEM } from "./types";

export default function useCarts() {
  const token = localStorage.getItem("customerToken");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const dispatch = useDispatch();

  const addToCart = (data) => {
    const result = axios
      .post("https://forbestech.herokuapp.com/carts/addToCart", data, config)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response.data;
      });
    return {
      type: ADD_TO_CART,
      payload: result,
    };
  };

  const updateCartItem = (data) => {
    const result = axios
      .put("https://forbestech.herokuapp.com/carts/updateCartItem", data, config)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response.data;
      });
    return {
      type: UPDATE_CART_ITEM,
      payload: result,
    };
  };

  const removeCartItem = (productId) => {
    const result = axios
      .put(`https://forbestech.herokuapp.com/carts/removeCartItem/${productId}`, false, config)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response.data;
      });
    return {
      type: REMOVE_CART_ITEM,
      payload: result,
    };
  };

  const getCartItems = () => {
    const result = axios
      .get("https://forbestech.herokuapp.com/carts", config)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response.data;
      });

    dispatch({
      type: GET_CART_ITEM,
      payload: result,
    });
  };

  const clearCart = () => {
    dispatch({
      type: CLEAR_CART_ITEM,
    })
  }

  return {
    getCartItems,
    addToCart,
    updateCartItem,
    removeCartItem,
    clearCart
  };
}
