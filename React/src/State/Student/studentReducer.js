//import * as ActionTypes from "../actionTypes";
import * as ActionTypes from "../studentactionTypes";



const Initial_State = {
    Student: {
        userName: "aaaa",
        password: "",
        street: "California",
        mobile: 0,
        session: "MernStack"
    }
}

//write callback/ reducer to generate new state upon action change
let StudentReducer = (state = Initial_State, action) => {
    //switch case logice to read action type and return new state / updated state

    switch (action.type) {
        case ActionTypes.StudentLogin:
            //...state : {Student, Product ...etc}
            //returning all other states as it is but updating User using payload
            return { ...state, Student: action.payload }

        default:
            return state
    }
}

export default StudentReducer;

