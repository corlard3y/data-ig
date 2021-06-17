import { combineReducers } from 'redux';
import { productReducer } from '../Reducers/productReducers'

const reducers = combineReducers({
    allProducts:productReducer,
});

export default reducers;