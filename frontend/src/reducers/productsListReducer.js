import ACTION_TYPE from '../actions/types';

const initialState = {
    products: [],
    error: null,
    loading: false,
};

export const productsListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPE.PRODUCT_LIST_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ACTION_TYPE.PRODUCT_LIST_SUCCESS:
            return {
                ...state,
                products: action.payload,
                loading: false,
            };
        case ACTION_TYPE.PRODUCT_LIST_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};