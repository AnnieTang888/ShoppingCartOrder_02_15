import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserOrders } from '../../../State/Order/orderAction'; 

const RecentOrders = () => {
    const user = useSelector(state => state.UserReducer.User);
    const orders = useSelector(state => state.OrderReducer.Orders); 

    const dispatch = useDispatch();

    // Fetch orders when the component mounts
    useEffect(() => {
        //if (user && user.id) {
            dispatch(getUserOrders(user.id));
       // }
    }, [dispatch, user]);

    // Check for orders existence and length to handle loading or empty states
    if (!orders || orders.length === 0) {
        return <div className="container">No recent orders found.</div>;
    }

    return (
        <div className="container">
            <h1>Recent Orders</h1>
            {orders.map((order, index) => (
                <div key={index} className="order">
                    <h2>Order ID: {order._id}</h2> 
                    <ul>
                        {order.cartItems.map((item, itemIndex) => (
                            <li key={itemIndex}>
                                {item.name} - Quantity: {item.qty} at ${item.price} each
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default RecentOrders;


