import { types } from "../Constants/types";

const initialState = {
    products:[],

};

export const productReducer = (state = initialState,{type,payload}) => {
    switch (type) {
        case types.SET_PRODUCTS:
            return {...state,products: payload};
        default:
            return state;
    }
}