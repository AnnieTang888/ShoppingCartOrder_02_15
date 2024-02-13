import * as ActionTypes from '../actionTypes';

const INITIAL_STATE = {
    coupon: "" // Using 'coupon' for consistency
};

const CouponReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COUPONS:
            return {
                ...state,
                coupon: action.payload.coupon 
            };
        default:
            return state;
    }
};

export default CouponReducer;


