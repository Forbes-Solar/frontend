import { createSlice } from "@reduxjs/toolkit";
import {ToastContainer, toast } from "react-toastify";



const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
      
      toast.success("Product added to cart 🛒",{position:"top-center"});
      <ToastContainer/>
    },

    removeFromCart: (state, action) => {
     
      state.quantity -= 1;
      state.products.pop(action.payload);
      // state.total -= action.payload.price*action.payload.quantity;
  toast.error("Product removed from cart 🗑",{position:"top-center"})
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;