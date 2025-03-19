import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const {name, image, cost} = action.payload;
        const existingItem =state.plants.find(plant => plant.name === name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            state.plants.push({name, image, cost, quantity: 1});
        }
    },
    removeItem: (state, action) => {
        state.plants = state.plants.filter(plant => plant.name !== action.payload)
    },
    updateQuantity: (state, action) => {
        const {name, quantity} = action.payload;
        const itemToUpdate = state.plants.find(plant => plant.name === name);
        if (itemToUpdate) {
            itemToUpdate.quantity = quantity;
        }  
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
