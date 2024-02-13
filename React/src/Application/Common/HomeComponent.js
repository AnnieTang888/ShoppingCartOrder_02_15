import React, { Component, PureComponent } from "react";
//import { PropTypes } from "prop-types";
import PropTypes from "prop-types";

export default class HomeComponent extends PureComponent { 
//export default class HomeComponent extends Component {

    //Creation Life Cycle Methods
    constructor(props) { //props - is used to pass information from parent to child component
        super(props); //this is used to push back updated state in parent components

        this.state = {
            userName: props.userName,
            userSession: "MERNSTack"
        }
        this.intervalObj = ""

        this.address = React.createRef()
        this.age = React.createRef()
    }

//ensures that component has rendered first time and html is in place on browser
//we can do state change and also make server calls
    //componentDidMount() {
    //    this.callInterval()

    //    setTimeout(() => {
    //        this.address.current.value = "Address Changed"
    //        this.age.current.value = "Age Changed"
    //        this.age.current.focus();
    //    }, 3000);
           
    //}

    componentDidMount() {
        this.callInterval();

        setTimeout(() => {
            if (this.address.current && this.age.current) {
                this.address.current.value = "Address Changed";
                this.age.current.value = "Age Changed";
                this.age.current.focus();
            }
        }, 3000);
    }

    callInterval = () => {
        //this.intervalObj = setInterval(() => {
        //    console.log("Interval gets called in Home Component")
        //    this.setState({
        //        userName: "Annie"
        //    })
        //}, 1000);

    }

//destruction life cycle method - used to clear callbacks and api subscriptions
    componentWillUnmount() {
        console.log("component is unmounted")
        clearInterval(this.intervalObj)
    }

    textChange = (evt) => {
        let target = evt.target;
        let classList = evt.target.classList;
        // console.log(target)
        if (classList.contains("userName")) {
            this.setState({
                userName: target.value
                //userSession: target

            })
        } else {
            this.setState({
                userName: target.value
                //userSession: target

            })
        }

          evt.preventDefault()
    }

    formSubmit = (evt) => {
        let address = this.address.current.value
        let age = this.age.current.value

        this.setState({address,age})

        //this.state.address = address
        //this.state.age = age

        //this.forceUpdate();
        //alert(address + " " + age)
        evt.preventDefault()
    }

    //update life cycle method - decides whether re-render should happen or not
     // shouldComponentUpdate(nextProps, nextState){
     //    console.log(nextProps, nextState)

     //    if (nextState.address === this.state.address && nextState.age === this.state.age) {
     //        return false //no need to call render method as states are same
     //    } else {
     //        return true
     //    }

     //    //return true
     //}

    getSnapshotBeforeUpdate(prevState, prevProps) {
        console.log("getSnapshotBeforeUpdate");
        console.log("prevState", prevState);
        console.log("prevProps", prevProps);
        return {
            prevState,
            prevProps
        }
    }

    componentDidUpdate(prevState, prevProps) {
        console.log("componentDidUpdate");
        console.log("prevState", prevState);
        console.log("prevProps", prevProps);

        // this.setState({
        //     uState : prevState.uState
        // })
    }

    render() {
        console.log("render method called! to create virtual dom")
        return (
            <>
                <h1>Home Component</h1>
                <b>{this.props.userName}</b>
                <b>{this.state.userName}</b>
                <b>{this.state.address}</b>
                <b>{this.state.age}</b>

                {/* controlled way of component creation */}
                <div className="col-md-12">textChange_session
                    <div className="col-md-8">
                        <label>User Name</label>
                        <input type="text" value={this.state.userName} className="userName"
                            onChange={this.textChange} maxLength={20}></input>
                    </div>
                    <div className="col-md-8">
                        <label>User Session</label>
                        <input type="text" value={this.state.userSession} className="session"
                            onChange={this.textChange} maxLength={20}></input>
                    </div>
                </div>

                {/* un-controlled way of component creation */}
                <form className="form" action="/api/loginUser" onSubmit={this.formSubmit}>
                    <b>Address</b>
                    <input type="text" placeholder={"Default User Address"}
                        ref={this.address} maxLength={20}></input>
                    <b>Age</b>
                    <input type="text" placeholder={"Default User Age"}
                        ref={this.age} maxLength={20}></input>

                    <button type="submit" >Save</button>
                </form>
            </>
        )
    }
}
//HomeComponent.defaultProps = {
//    userName: "Gauri!!"
//}

HomeComponent.propTypes = {
    userName : PropTypes.string.isRequried
}
