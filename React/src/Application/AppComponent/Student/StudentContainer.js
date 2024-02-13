//Container contains redux and react redux connection, implements mapStateToProps and mapDispatchToProps
//also allows developer to isolate react component with functions
import { connect } from "react-redux";
import { StudentLogin, SaveStuToDB } from "../../../State/Student/studentAction.js";
import StudentComponent from "./StudentComponent.jsx";

//subscriber
let mapStateToProps = (state) => { //state - store object from configure store in store.js
    return { //define the props that we need to read from store
        user: state.StudentReducer.Student, //now props.user - can be used in component to read user Initial_state

    }
};

//publisher
let mapDispatchToProps = (dispatch) => {
    return {
        AddUser: (userObj) => dispatch(StudentLogin(userObj)),
        LoginUser: (newuser) => dispatch(SaveStuToDB(newuser))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(StudentComponent);
