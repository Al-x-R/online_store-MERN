import { combineReducers } from 'redux';
import { productsListReducer } from './productsListReducer';
import { productDetailsReducer } from './productDetailsReducer';

const rootReducer = combineReducers({
  productList: productsListReducer,
  productDetail: productDetailsReducer,
});

export default rootReducer;