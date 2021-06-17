import { types } from '../Constants/types';

export const setProducts = (products) => {
    return{
        type: types.SET_PRODUCTS,
        payload:products
    };
};


export const selectedProduct = (product) => {
    return{
        type: types.SELECTED_PRODUCT,
        payload:product
    };
};
