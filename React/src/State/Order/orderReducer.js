
import * as ActionTypes from "../actionTypes";

const INITIAL_STATE = [] 

export default function OrderReducer(state = INITIAL_STATE, action) 
{
    console.log("order Reducer", state, action);
    // addOrder

    switch(action.type) 
    {
        case ActionTypes.ADD_RECENT_ORDER:
           
            let newState = state.filter(order => order._id !== action.payload.order._id);
            return [...newState, action.payload.order];//creating a new state with new order
        
        default:
            return state;
    }
}




// import * as ActionTypes from '../actionTypes';


// const INITIAL_STATE = {
//     orders: [],
//     error: null,
//     loading: false
// };

// export default function orderReducer(state = INITIAL_STATE, action) {
//     switch(action.type) {
//         case ActionTypes.SAVE_ORDER_SUCCESS:
//             return {
//                 ...state,
//                 orders: [...state.orders, action.payload],
//                 error: null
//             };
        
//         case ActionTypes.SAVE_ORDER_FAILURE:
//             return {
//                 ...state,
//                 error: action.payload
//             };

//         case ActionTypes.FETCH_ORDERS_SUCCESS:
//             return {
//                 ...state,
//                 orders: action.payload,
//                 error: null
//             };

//         case ActionTypes.FETCH_ORDERS_FAILURE:
//             return {
//                 ...state,
//                 error: action.payload
//             };

//         default:
//             return state;
//     }
// }





