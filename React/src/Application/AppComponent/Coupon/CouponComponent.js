import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { generateCoupon } from '../../../State/Coupon/couponAction';

const CouponComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const coupon = useSelector(state => state.CouponReducer.coupon); 

    const generateCouponClick = () => {
        const newCoupon = Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit number
        dispatch(generateCoupon(newCoupon));
    };

    const goToCheckout = (evt) => {
        evt.preventDefault();
        navigate('/checkout');
    };

    return (
        <div className="col-md-12">
            <h1>Coupon Component</h1>
            <h3>Your coupon is: {coupon}</h3>            
            <button onClick={generateCouponClick}>Generate Coupon</button>
            <button onClick={goToCheckout}>Go To Checkout</button>
        </div>
    );
};

export default CouponComponent;




