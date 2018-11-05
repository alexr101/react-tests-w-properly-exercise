import {UPDATE_API_PARAMS, UPDATE_PROPERTIES, UPDATE_PROPERTY} from '../constants/actionTypes';

const initialState = {
    properties: [],
    apiParams: {},
}

export default function counter(state = initialState, action) {
    let newState = { ...state };

    switch (action.type) {
        case UPDATE_API_PARAMS:
            return {...state, apiParams: action.payload};
        case UPDATE_PROPERTIES:
            console.log('update properies');
            console.log({...state, properties: action.payload});
            
            
            return {...state, properties: action.payload};
        case UPDATE_PROPERTY:
        console.log({
            ...state,
            properties: state.properties.map(property => property.id === action.id ?
                // transform the one with a matching id
                action.payload : 
                // otherwise return original todo
                property
            ) 
        });
        
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