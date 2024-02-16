
import * as ActionTypes from "../actionTypes";

const INITIAL_STATE = { orders: [], error: null, loading: false };

export default function OrderReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ActionTypes.ADD_RECENT_ORDER:
            //const filteredOrders = state.orders.filter(order => order._id !== action.payload.order._id);
            return {
                ...state,
                orders:  action.payload.order,
                //orders: [...filteredOrders, action.payload.order],
                error: null, // clear error on successful action
                loading: false, // Reset loading state on successful addition
            };

        case ActionTypes.FETCH_RECENT_ORDERS_SUCCESS:
            console.log("orders", state.orders);
            const filteredOrders = state.orders.filter(order => order._id !== action.payload.orderId);
            return {
                ...state,
                orders: filteredOrders,
                error: null, // Clear any previous errors
                loading: false, // Assume fetching is done, reset loading state
            };

        case ActionTypes.CANCEL_ORDER:
            // Initiate cancellation
            return {
                ...state,
                loading: true,
            };


        case ActionTypes.UPDATE_ORDER:
            // Set loading state for initiating cancel/update process
            return {
                ...state,
                loading: true,
            };

        case ActionTypes.CANCEL_ORDER_SUCCESS:
            // Update the specific order as cancelled, reset loading state
            const updatedOrdersCancel = state.orders.map(order =>
                order._id === action.payload.orderId ? { ...order, status: 'cancelled' } : order
            );
            return {
                ...state,
                orders: updatedOrdersCancel,
                loading: false,
            };

        case ActionTypes.MARK_ORDER_AS_DELIVERED:
            // Mark the specific order as delivered, reset loading state
            const updatedOrdersDelivered = state.orders.map(order =>
                order._id === action.payload.orderId ? { ...order, status: 'delivered' } : order
            );
            return {
                ...state,
                orders: updatedOrdersDelivered,
                loading: false,
            };

        case ActionTypes.UPDATE_ORDER_SUCCESS:
            // Update the specific order details, reset loading state
            const updatedOrders = state.orders.map(order =>
                order._id === action.payload.order._id ? action.payload.order : order
            );
            return {
                ...state,
                orders: updatedOrders,
                loading: false,
            };

        case ActionTypes.FETCH_ORDERS_FAILURE:
        case ActionTypes.UPDATE_ORDER_FAILURE:
        case ActionTypes.CANCEL_ORDER_FAILURE:
            // Handle failure, update error state, and reset loading state
            return {
                ...state,
                error: action.payload.error,
                loading: false,
            };

        default:
            return state;
    }
}











