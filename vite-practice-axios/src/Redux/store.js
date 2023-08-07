import { configureStore } from '@reduxjs/toolkit';
import CalcSlice from '../features/CalcSlice';

export const store = configureStore({
    reducer: {
        calculator: CalcSlice,
    },
});
