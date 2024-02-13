import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./app.css";

import HeaderComponent from "./Common/HeaderComponent"
import Footer from "./Common/footerComponent";
import NotFound from "./Common/NotFoundComponent";
import Home from "./Common/HomeComponent";
import About from "./Common/AboutComponent";
import HomeComponent from "./Common/HomeComponent";

//class component

export default class ApplicationComponent extends Component {

    constructor(props) { //props - is used to pass information from parent to child component
        super(props); //this is used to push back updated state in parent components

        this.state = { //state is tightely coupled with react renderer and reads the change to recreate virtual dom
            name: "Khan Tran",
            header: "10,001+ employees · UI Specialist"
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
        return (
            <Router>
                <HeaderComponent header={this.state.header} name={this.state.name} getChildData={this.getChildData} />
                <Routes>
                    <Route path="/home" element={<Home user={"User"} userName={"Boubacar"} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        )
    }
}