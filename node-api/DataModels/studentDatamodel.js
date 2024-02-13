let mongooseObj = require("mongoose");
schemaObj = mongooseObj.Schema; //using the schema class from mongoose

//creates db with name mernstack16 or opens a connection if already present
mongooseObj.connect("mongodb://127.0.0.1/assessment4_0113");

let studentSchema = new schemaObj({
    userName: { type: String, required: true },
    password: { type: String, required: true },
    street: String,
    mobile: Number,
    session: String
},
    {
        versionKey: false //false - set to false then it wont create in mongodb
    })

//let UserModel = mongooseObj.model("user", userSchema);//user - collection name, pluralised by mongodb
let StudentModel = mongooseObj.model("student", studentSchema)

module.exports = StudentModel; //exported model to have access to all functions present in mongoose for select/insert/update