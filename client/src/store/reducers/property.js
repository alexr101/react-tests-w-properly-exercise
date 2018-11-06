import {UPDATE_API_PARAMS, UPDATE_PROPERTIES, UPDATE_PROPERTY} from '../constants/actionTypes';

const initialState = {
    properties: [],
    apiParams: {},
}

export default function counter(state = initialState, action) {
    console.log(action);
    
    switch (action.type) {
        case UPDATE_API_PARAMS:
            let newState = {
                ...state, 
                apiParams: { 
                    ...state.apiParams 
                }
            }
            newState.apiParams[action.payload.key] = action.payload.value
            return newState;
        case UPDATE_PROPERTIES:
            return {...state, properties: action.payload};
        case UPDATE_PROPERTY:
            return {
                ...state,
                properties: state.properties.map(property => property.id === action.id ?
                    // transform the one with a matching id
                    action.payload : 
                    // otherwise return original todo
                    property
                ) 
            };
        default:
            return state
    }
}