import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    Number1: 0,
    Number2: 0,
    value: 0,
};

const CalcSlice = createSlice({
    name: 'Calculator',
    initialState,
    reducers: {
        addition: (state, action) => {
            state.value = +action.payload.valA + +action.payload.valB;
        },
        subtraction: (state, action) => {
            state.value = +action.payload.valA - +action.payload.valB;
        },
        multiplication: (state, action) => {
            state.value = +action.payload.valA * +action.payload.valB;
        },
        division: (state, action) => {
            state.value = +action.payload.valA / +action.payload.valB;
        },
        val: (state, action) => {
            state.value = action.payload;
        },
    },
});


export const { addition, subtraction, multiplication, division, val } =
    CalcSlice.actions;

export default CalcSlice.reducer;
