import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    cart: [],
    MarkAdded: {},
}

const SliceCart = createSlice({
    name: 'SliceCart',
    initialState,
    reducers: {
        storeProducts: (state, action) => {
            state.products = action.payload;
        },
        storeCart: (state, action) => {
            const { id } = action.payload
            state.cart = [...state.cart, action.payload];
            // state.cart.push({ ...action.payload, quantity: 1, addedToCart: true }) // this.state is manuplualting the initialState.
            state.MarkAdded[id] = true
        },
        removeId: (state, action) => {
            const { id } = action.payload
            const { quantity } = action.payload
            if (!quantity || quantity === 1) {
                state.cart = state.cart.filter((item) => item.id !== action.payload.id);
                return;
            }
            state.cart = state.cart.map((items) => {
                if (items.id === id) {
                    items.quantity = items.quantity ? items.quantity - 1 : 0
                }
                return items
            })
        },
        addQ: (state, action) => {
            const { id } = action.payload
            state.cart = state.cart.map((items) => {
                if (items.id === id) {
                    items.quantity = items.quantity ? items.quantity + 1 : 2
                }
                return items
            })
        },
        itemRemove: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },
    },
})

export const { storeCart, storeProducts, removeId, addQ, itemRemove } = SliceCart.actions;
export default SliceCart.reducer;
