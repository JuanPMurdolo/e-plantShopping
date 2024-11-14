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
      const { name, quantity, operation } = action.payload;
      const product = state.items.find(item => item.name === name);
    
      if (product) {
        // Si la operación es 'increment', sumamos 1, si es 'decrement', restamos 1
        if (operation === 'increment') {
          product.quantity += 1;
        } else if (operation === 'decrement' && product.quantity > 1) {
          product.quantity -= 1;
        }
      }
    }
    },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
