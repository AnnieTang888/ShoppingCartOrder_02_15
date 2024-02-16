import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserOrders, cancelOrderAsync } from '../../../State/Order/orderAction';
import { useNavigate } from "react-router-dom";

let RecentOrderComponent = () => {
    let user = useSelector((state)=>state.UserReducer.User)
    let orders = useSelector(state => state.OrderReducer.orders);
    let dispatch = useDispatch();

    //let navigate = useNavigate();

    // let goToCancelItem = ()=>{     
    //         navigate('/cancelItem', { state:{user}})   
    // }
    
    useEffect(() => {
        console.log("user");
        if (user && user._id) {
            dispatch(getUserOrders(user._id));
        }
    }, []);

    const handleCancelOrder = (orderId) => {
        dispatch(cancelOrderAsync(orderId));
        
        //navigate('/cancelorder', { state:{user}}) 
    };

    if (!orders || orders.length === 0) {
        return <div className="container">No recent orders found.</div>;
    }

    return (

        <div className="container">
            <h1>Recent Orders</h1>
            {orders.map((order, index) => (
                order.status == 'cancelled'? "" : 
                <div key={index} className="order">
                    <ul>
                        <li>Order ID: {order._id}</li>
                        <li>Order ID: {order.status}</li>
                        <li>Date: {order.dateTime}</li>                                      
                    <ul>
                        {order.cart.map((item, itemIndex) => (
                            <li key={itemIndex}>
                                {item.name} - Quantity: {item.qty} at ${item.price} each
                            </li>
                        ))}
                    </ul>
                    </ul> 
                    {/* Cancel Order Button */}
                    <button onClick={() => handleCancelOrder(order._id)}>Cancel Order</button>
                </div> 
            ))}
        </div>
    );
};

export default RecentOrderComponent;
