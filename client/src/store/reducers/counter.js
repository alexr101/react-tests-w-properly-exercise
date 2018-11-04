import {UPDATE_AMOUNT, ADD} from '../constants/actionTypes';

const initialState = {
    amount: 0,
    count: 0
}

export default function counter(state = initialState, action) {
    console.log(action)
    console.log({...state, amount: action.payload})
    switch (action.type) {
        case UPDATE_AMOUNT:
            return {...state, amount: action.payload};
        case ADD:
            return {...state, count: state.count + action.payload};
        default:
            return state
    }
}