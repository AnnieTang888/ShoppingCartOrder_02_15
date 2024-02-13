//create routes / api's for user singin-up
let express = require("express");
let studentRoute = express.Router();
const studentDataModel = require("../DataModels/studentDatamodel");

//localhost:9001/user/api/signinup
studentRoute.post("/api/signinup", (req, res) => {
    let student = req.body //this will be sent as post request from userAction
    console.log(student)

    studentDataModel.findOne({ userName: req.body.userName }).then((existingUser) => {
        if (existingUser) {
            console.log("sigin in success ", existingUser);
            res.send(existingUser)
        } else { //user is not present go for user creation
            //use schema to create new user object
            let newStu = new studentDataModel(student)//req.body
            newStu.save().then((newStu) => {//will get _id once document is created
                console.log("successful signup ", newStu);
                res.send(newStu)
            }).catch((err1) => {
                console.log("err signup", err1);
                res.send("error while sign up")
            })
        }
    }).catch((err) => {
        console.log("err while login ", err);
        res.send("Error while Login - existing user")
    })
})

studentRoute.get("/api/getstudent", (req, res) => {
    studentDataModel.find()
        .then((allusers) => {
            res.send(allusers)
        })
        .catch(() => {
            res.send("error while fetching users")
        })
})

module.exports = studentRoute;
