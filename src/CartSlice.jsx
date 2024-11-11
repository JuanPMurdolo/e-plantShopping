import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    
    addItem: (state, action) => {
    const product = action.payload;
      const existingProduct = state.items.find(item => item.name === product.name);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
        const productName = action.payload;
        state.items = state.items.filter(item => item.name !== productName);
    },

    updateQuantity: (state, action) => {
        const { productName, quantity } = action.payload;
        const product = state.items.find(item => item.name === productName);
        if (product) {
          product.quantity = quantity;
        }
      },
    },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
