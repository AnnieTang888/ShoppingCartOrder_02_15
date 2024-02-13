import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./app.css";

import HeaderComponent from "./Common/headerComponent";
import Footer from "./Common/footerComponent";
import NotFound from "./Common/NotFoundComponent";
import Home from "./Common/HomeComponent";
import About from "./Common/AboutComponent";
import Annie from "./Common/AnnieComponent"; 
//import UserComponent from "./AppComponent/User/UserComponent.jsx";
import User from "./AppComponent/User/UserContainer";
import Student from "./AppComponent/Student/StudentContainer";
import UserHook from "./AppComponent/User/UserHookComponent";
import ProductComponent from "./AppComponent/Product/productComponent";
import CartComponent from "./AppComponent/Cart/CartComponent";
import CheckoutComponent from "./AppComponent/Cart/CheckoutComponent";
import CouponComponent from "./AppComponent/Coupon/CouponComponent";
import RecentOrderComponent from "./AppComponent/Order/RecentOrderComponent";


//class component

export default class ApplicationComponent extends Component {

    constructor(props) { //props - is used to pass information from parent to child component
        super(props); //this is used to push back updated state in parent components

        this.state = { //state is tightely coupled with react renderer and reads the change to recreate virtual dom
            name: "Annie",
            header: "Annie is a student in Synergistic IT"
        }
    }

    //get data from child component using callback function
    getChildData = (data) => {
        //alert(data)

        this.setState({
            name: data
        })
    }


    //this method returns virtual dom on every change of state using this.setState
    render() { //life cycle method of React.Component base class, generated virtual dom on state change
        const { name } = this.state;
        return (
            <Router>
                <HeaderComponent header={this.state.header} name={this.state.name} getChildData={this.getChildData} />
                <Routes>
                    <Route path="/home" element={<Home userName={"Jonathan"} />} />
                    <Route path="/user" element={<User />} />
                    <Route path="/hook" element={<UserHook />} />
                    <Route path="/product" element={<ProductComponent />} />
                    <Route path="/checkout" element={<CheckoutComponent />} />
                    <Route path="/cart" element={<CartComponent />} />
                    <Route path="/coupon" element={<CouponComponent />} />
                    <Route path="/recentorder" element={<RecentOrderComponent />} />

                    <Route path="/student" element={<Student />} />
                    <Route path="/about" element={<About />} />  
                    <Route path="/annie" element={<Annie />} /> 
                    <Route path="*" element={<NotFound/>} />
                </Routes>
                <Footer />
            </Router>
        )
    }
}