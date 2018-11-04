import {ADD, UPDATE_AMOUNT} from '../constants/actionTypes';

export const add = (amount) => ({
    type: ADD,
    payload: amount
})

export const updateAmount = (amount) => ({
    type: UPDATE_AMOUNT,
    payload: amount
})