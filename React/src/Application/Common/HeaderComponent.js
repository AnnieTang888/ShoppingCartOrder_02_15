import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

let HeaderComponent = (props) => {
    // Extract userName from props. If not provided, default to an empty string.
    let userName = props.user && props.user.userName ? props.user.userName : "";

    // Determine if the userName is empty. If it is, the user is considered not logged in.
    const isLoggedIn = userName !== "";

    return (
        <>
            {/* Conditionally display greeting message based on login status */}
            {
                isLoggedIn 
                ? <b>Hi {userName}, Welcome to SynergisticIT Shopping Cart</b>
                : <b>Welcome! Please Log in first!</b>
            }

            {!isLoggedIn && <b> Welcome to SynergisticIT Shopping Cart. </b>}

            <div>
                {/* Always show Home and About links */}
                <NavLink to="/home" className="button">Home</NavLink>
                <NavLink to="/about" className="button">About</NavLink>

                {/* Conditionally render links based on whether the user is logged in */}
                {isLoggedIn ? (
                    // Show these links only when the user is logged in
                    <>
                        <NavLink to="/hook" className="button">UserHook</NavLink>
                        <NavLink to="/product" className="button">Product</NavLink>
                        <NavLink to="/cart" className="button">Cart</NavLink>
                        <NavLink to="/coupon" className="button">Generate Coupon</NavLink>
                        <NavLink to="/recentorder" className="button">Recent Order</NavLink>
                        <NavLink to="/student" className="button">Student</NavLink>
                        <NavLink to="/annie" className="button">Annie</NavLink>
                    </>
                ) : (
                    // Show the Login link when the user is not logged in
                    <NavLink to="/user" className="button">Login</NavLink>
                )}
            </div>
        </>
    );
};

let mapStateToProps = (state) => {
    return {
        user: state.UserReducer.User,
    };
};

export default connect(mapStateToProps, null)(HeaderComponent);

// import React from "react";
// import { NavLink } from "react-router-dom";
// import { connect } from "react-redux";

// let HeaderComponent = (props) => {
//     console.log("Rendering the header component")
//     //let userName = "Annie";
//     let userName = props.user && props.user.userName ? props.user.userName : "No User Initialized";


//     return (
//         <>
//             Hi <b>{userName + ", "}</b> Welcome to SynergisticIT Shopping Cart
//             {userName == "" ? <b> Please Login to see other features</b> : ""}

//             <div>
//                 <NavLink to="/home" className="button" activeclassname="success" >Home </NavLink>
//                 <NavLink to="/hook" className="button" activeclassname="success" >UserHook </NavLink>
//                 <NavLink to="/product" className="button" activeclassname="success" >Product </NavLink>
//                 <NavLink to="/cart" className="button" activeclassname="success" >Cart </NavLink>
//                 <NavLink to="/coupon" className="button" activeclassname="success">Generate Coupon</NavLink>

//                 <NavLink to="/user" className="button" activeclassname="success" >Login </NavLink>
//                 <NavLink to="/student" className="button" activeclassname="success" >Student </NavLink>
//                 <NavLink to="/about" className="button" activeclassname="success" >About </NavLink>
//                 <NavLink to="/annie" className="button" activeclassname="success" >Annie </NavLink>
//             </div>

//             {/*<div>
//                 <h3>{props.header}</h3>
//                 <h3>Name - {props.name}</h3>

//                 <button onClick={() => props.getChildData("Annie assignment!!! from child component")}>Pass To Parent</button>
//             </div>*/}
//         </>
//     )
// }

// //when we want component to become subscriber must implement - mapStoreToProps
// let mapStateToProps = (state) => { //state - store object from configure store in store.js
//     return { //define the props that we need to read from store
//         user: state.UserReducer.User, //now props.user - can be used in component to read user Initial_state
//         student: state.StudentReducer.Student,
//         product: state.ProductReducer.Product
//        }
// }

// //let mapstatetoprops = (state) => { //state - store object from configure store in store.js
// //    return { //define the props that we need to read from store
// //        student: state.studentreducer.student
// //    }
// //}


// //when we need to make our component a publisher must implement this
// //let mapDispatchToProps;

// export default connect(mapStateToProps, null)(HeaderComponent);

// //export default HeaderComponent;