import ACTION_TYPE from './types';
import axios from 'axios';

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: ACTION_TYPE.PRODUCTS_LIST_REQUEST });

    const { data } = await axios.get('/api/products');

    dispatch({
      type: ACTION_TYPE.PRODUCTS_LIST_SUCCESS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: ACTION_TYPE.PRODUCTS_LIST_ERROR,
      payload: e.response && e.response.data.message
        ? e.response.data.message
        : e.message,
    });
  }
};

export const productDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: ACTION_TYPE.PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
      type: ACTION_TYPE.PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: ACTION_TYPE.PRODUCT_DETAILS_ERROR,
      payload: e.response && e.response.data.message
        ? e.response.data.message
        : e.message,
    });
  }
};