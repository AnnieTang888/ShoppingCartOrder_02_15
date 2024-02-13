
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveOrderToDb } from '../../../State/Order/orderAction'; 
import CartComponent from './CartComponent';
import CartSummary from './CartSummary';

let CheckoutComponent = (props) => {
    const cartList = useSelector((state) => state.CartReducer);
    const user = useSelector((state) => state.UserReducer.User);
    const coupon = useSelector((state) => state.CouponReducer.coupon);
    const dispatch = useDispatch();

    const [paymentCompleted, setPaymentCompleted] = useState(false);

    const recalculate = (cartItems) => {
        let amount = 0, count = 0;
        for (let item of cartItems) {
            amount += item.qty * item.price;
            count += item.qty;
        }
        
        let discountAmount = coupon ? 50 : 0; 
        amount = Math.max(amount - discountAmount, 0);

        return { amount, count, discountAmount };
    };

    const {amount, count, discountAmount} = recalculate(cartList);

    const handlePayment = () => {
        // Dispatch action to save the order to the database
        dispatch(saveOrderToDb(user._id, cartList));
        // update the state to show the payment confirmation message
        setPaymentCompleted(true);
    };

    if (paymentCompleted) {
        return (
            <div className="container">
                
                <h1>Payment Confirmation</h1>
                <p>Thank you for your payment. Your items are now being processed!</p>
            </div>
        );
    }
   
    return (
        <div className="container">
            <section>
                 <h2>User Details</h2>
                 <p>Name: {user.userName}</p>
                 <p>Address: {user.street}</p>
                 <p>We will deliver your products to the above address.</p>
                 <CartComponent readOnly={true}/>
            </section>
           
            <section>
                <h2>Purchase Summary</h2>
                {coupon && <div><p>Coupon Applied: -${discountAmount}</p></div>}
                <CartSummary data={{ amount, count }} readOnly={true} />
            </section>

            <button onClick={handlePayment}>Make Payment</button>
        </div>
    );
  };


export default CheckoutComponent;


// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { saveOrderToDb } from '../../../State/Order/orderAction'; // Ensure this import path is correct
// import CartSummary from './CartSummary';

// const CheckoutComponent = () => {
//     const cartList = useSelector(state => state.CartReducer);
//     const user = useSelector(state => state.UserReducer.User);
//     const dispatch = useDispatch();

//     const [paymentCompleted, setPaymentCompleted] = useState(false);

//     const handlePayment = () => {
//         dispatch(saveOrderToDb(user._id, cartList));
//         setPaymentCompleted(true);
//     };

//     return (
//         <div className="container">
//             {paymentCompleted && cartList.length > 0 ? (
//                 <>
//                     <h1>Order Detail</h1>
//                     <div>
//                         <p>Name: {cartList[0].name}</p>
//                         <p>Price: ${cartList[0].price}</p>
//                         <p>Description: {cartList[0].desc}</p>
//                         {/* Add more details as needed */}
//                     </div>
//                 </>
//             ) : (
//                 <>
//                     <section>
//                         <h2>User Details</h2>
//                         <p>Name: {user.userName}</p>
//                         <p>Address: {user.street}</p>
//                     </section>
//                     <section>
//                         <h2>Purchase Summary</h2>
//                         <CartSummary data={{ amount: 0, count: cartList.length }} readOnly={true} />
//                     </section>
//                     <button onClick={handlePayment}>Make Payment</button>
//                 </>
//             )}
//         </div>
//     );
// };

// export default CheckoutComponent;





