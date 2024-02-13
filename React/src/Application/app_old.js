import React, { Component } from "react";
import "./app.css";
import HeaderComponent from "./Common/headerComponent"
import Footer from "./Common/footerComponent";
import Notfound from "./Common/NotFoundComponent";
import HomeComponent from "./Common/HomeComponent";

//class component
export default class ApplicationComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name: "programmer"
        }
    }

    ChangeNameEvent = () => {
        alert("Name will be updated!!")
        this.setState({
            name : "Annie"
        })
    }
    getChildData = (data) => {
        //alert(data)
        this.setState({
            name: data
        })
    }
   
    render(){
        let a = 10, b = 5;
        let header = "UI specialist"
        return (

            <>
            <h1>{this.state.header}</h1>
                <HeaderComponent header={this.state.header} name={this.state.name} getChildData={this.getChildData} />
            <b>The Arithmatic Operation {a + b} {a * b} {a - b} {a / b}</b>
            <h1>This is the Application Component</h1>
                <button onClick={this.ChangeNameEvent}>Change Name</button>
                <HomeComponent />
                <Notfound/>
                <Footer/>
                {/*<Footer>
                    <h3>Keep Shopping With us</h3>
                    <h3>Most discounts on each purchase!!</h3>
                </Footer>*/}
            
          </>

        )
    }
}

/*
//functional component
let ApplicationComponent = () => {
    let a = 10, b = 5;
    return (
        <>
            <HeaderComponent />
            <b>The Arithmatic Operation {a + b} {a * b} {a - b} {a / b}</b>
            <h1>This is the Application Component</h1>
        </>
    )
}
*/

//export default ApplicationComponent
