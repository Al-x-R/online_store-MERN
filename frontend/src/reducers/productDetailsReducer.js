import ACTION_TYPE from '../actions/types';

const initialState = {
  reviews: [],
  error: null,
  loading: false,
};

export const productDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ACTION_TYPE.PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case ACTION_TYPE.PRODUCT_DETAILS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};