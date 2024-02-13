//we will define actions to be used by action creator and dispatchers to dispatch to store
import * as ActionTypes from "../studentactionTypes";
import axios from "axios";


//call back function to define type and payload to be used in reducer
export const StudentLogin = (newStu) => {
    return {
        type: ActionTypes.StudentLogin,
        payload: newStu
    }
}

//server call

export const SaveStuToDB = (newStu) => {
    return (dispatch) => {
        axios.post("http://localhost:9001/user/api/signinup",//uri or end point of singninup api
            newStu //passing into the body req.body
        )
            .then((savedStu) => {
                let signdStu = savedStu.data;
                console.log(signdStu)
                dispatch(StudentLogin(signdStu))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}


