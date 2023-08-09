import { configureStore } from "@reduxjs/toolkit";
import SliceCart from "./Slice"

export const store = configureStore({
    reducer: {
        SliceCart: SliceCart,
    },
});