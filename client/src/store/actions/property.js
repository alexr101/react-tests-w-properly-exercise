import {UPDATE_API_PARAMS, UPDATE_PROPERTIES, UPDATE_PROPERTY} from '../constants/actionTypes';

export const updateApiParams = (params) => ({
    type: UPDATE_API_PARAMS,
    payload: params
})

export const updateProperties = (properties) => ({
    type: UPDATE_PROPERTIES,
    payload: properties
})

export const updateProperty = (property) => ({
    type: UPDATE_PROPERTY,
    payload: property
})

