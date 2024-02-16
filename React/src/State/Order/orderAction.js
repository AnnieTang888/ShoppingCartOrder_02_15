import * as ActionTypes from "../actionTypes";

export const addRecentOrder = (order)=>({
    type: ActionTypes.ADD_RECENT_ORDER,
    payload: {order} 
});

export const cancelOrder = (orderId)=>({
    type: ActionTypes.CANCEL_ORDER,
    payload: {orderId} 
});

// export const updateOrder = (orderId, updatedOrder)=>({
//     type: ActionTypes.UPDATE_ORDER,
//     payload: {orderId, updatedOrder} 
// });

// Action to save the current cart as an order
export const saveOrderToDb = (userid, cart) => {
    console.log("Items saved", cart);

    return function(dispatch) {
        window.fetch("http://localhost:9001/order/api/saveOrder", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid,cart})
        })
        .then(response => response.json())
        .then(orderResponse => {
            console.log("response: ", orderResponse);
           // dispatch({ type: ActionTypes.SAVE_ORDER_SUCCESS, payload: orderResponse });
        })
        .catch(err => {
            console.log("Error Saving Order", err);
            //dispatch({ type: ActionTypes.SAVE_ORDER_FAILURE, payload: err });
        });
    };
};

// Action to fetch recent orders for a user
export const getUserOrders = (userid) => {
        
    return function(dispatch) {
        console.log("Get List Of Orders");
        window.fetch("http://localhost:9001/order/api/getUserOrder",{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid:userid})})
        .then (response => response.json())
        .then (userorderresponse => {
            console.log("response - get user order ", userorderresponse);
            
            //dispatch(emptyTheCart()); //remove the duplicacy first empty the cart 
            
            // for (const order of userorderresponse.cart) {
                 //console.log("order in for of", order);
                 // Directly dispatching the entire response without individually processing orders 
                 let action = addRecentOrder(userorderresponse);  
                 dispatch(action);    
            // }                
                       
        })
        .catch((err)=>{
            console.log("Error While Login", err)
        })  
    }       
}

// Action to cancel the current order
export const cancelOrderAsync = (orderId) => {
    return function(dispatch) {
        
        window.fetch("http://localhost:9001/order/api/cancelThisOrder", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ orderId })
        })
        .then(response => response.json())
        .then(orderResponse => {
            dispatch({ type: ActionTypes.CANCEL_ORDER_SUCCESS, payload: { orderId } });
        })
        .catch(err => {
            dispatch({ type: ActionTypes.CANCEL_ORDER_FAILURE, payload: { error: err.toString() } });
        });
    };
};


// Action to fetch all canceled orders for a user
export const fetchAllCancelOrder = (userId) => {
    return function(dispatch) {
        console.log("Fetching canceled orders");
        window.fetch("http://localhost:9001/order/api/fetchAllCancelOrder", {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId })
        })
        .then(response => response.json())
        .then(userCancelOrderResponse => {
           
            dispatch({ type: ActionTypes.FETCH_CANCELLED_ORDERS_SUCCESS, payload: userCancelOrderResponse });
        })
        .catch(err => {
            console.log("Error fetching canceled orders", err);
            dispatch({ type: ActionTypes.FETCH_CANCELLED_ORDERS_FAILURE, payload: { error: err.toString() } });
        });
    };
};




