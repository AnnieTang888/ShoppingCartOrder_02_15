import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllCancelOrder } from '../../../State/Order/orderAction'; 
import { addItemToCart } from '../../../State/Cart/cartAction'; 

const CancelledOrdersComponent = () => {
    const user = useSelector(state => state.UserReducer.User);
    const orders = useSelector(state => state.OrderReducer.orders); 
    const dispatch = useDispatch();

    useEffect(() => {
        if (user && user._id) {
            dispatch(fetchAllCancelOrder(user._id)); 
        }
    }, []);

    // Filter out cancelled orders from the fetched orders
    const cancelledOrders = orders.filter(order => order.status === 'cancelled');

    const handleBuyAgain = (cartItems) => {
         cartItems.forEach(item => {
             dispatch(addItemToCart(item)); // Re-add each item to the cart use forEach instead of map is because the side effect (dispatching an action for each item)
         });
        alert("This offer is much more exciting!");
    };

    if (!cancelledOrders.length) {
        return <div className="container">No cancelled orders found.</div>;
    }

    return (
        <div className="container">
            <h1>Cancelled Orders</h1>
            {cancelledOrders.map((order, index) => (
                <div key={index} className="order">
                    <ul>
                        <li>Order ID: {order._id}</li>
                        <li>Date: {new Date(order.dateTime).toLocaleString()}</li>
                        <li>Status: Cancelled</li>
                        <ul>
                            {order.cart.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                    {item.name} - Quantity: {item.qty} at ${item.price} each
                                </li>
                            ))}
                        </ul>
                    </ul>
                    <button onClick={() => handleBuyAgain(order.cart)}>Buy Again</button>
                </div>
            ))}
        </div>
    );
};

export default CancelledOrdersComponent;
