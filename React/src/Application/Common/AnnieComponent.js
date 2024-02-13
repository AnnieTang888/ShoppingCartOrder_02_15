import React from "react";
import { useParams, useNavigate } from "react-router-dom";



//let Annie = (props) => {

//    const App = () => {
//        const myDetails = {
//            name: 'Your Name',
//            age: 'Your Age',
//            location: 'Your Location',
//            hobbies: 'Your Hobbies',
//            additionalInfo: 'Any additional information about you.',
//        };
//    return (
//        <div>
//            <h2>About Me</h2>
//            <p>Name: {props.name}</p>
//            <p>Age: {props.age}</p>
//            <p>Location: {props.location}</p>
//            <p>Hobbies: {props.hobbies}</p>
//            <p>{props.additionalInfo}</p>
//        </div>
//    );
//};
//export default Annie;
//



let Annie = () => {
    let params= useParams();
    //debugger   
    let param = params && params["id"] ? params["id"] : "no parameters";

    let goToUser = useNavigate();

    let onGoToUserClick = (evt) => {
        goToUser("/user");

        evt.preventDefault();//it stops the default behaviour like event propagation
    }

    return (
        //<form action="/saveUser" onSubmit={onGoToUserClick}>
        <div className="about" >
            <h2>Annie </h2>
            //<p className="about-content">Name: Annie, Id: 888, address: San Jose, religion: Christian,  Hobby: programming 
            //</p>
            //<p>id = {param}</p>//
            //


            <button className={"form-control btn btn-primary col-md-2"}
                onClick={onGoToUserClick}
            //onSubmit={onGoToUserClick}
            >Go To User</button>
        </div>
        //</form>
    )
}


export default Annie;

//
