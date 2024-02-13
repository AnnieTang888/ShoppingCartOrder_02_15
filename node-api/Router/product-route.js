//create routes / api's for user singin-up
let express = require("express");
let productRoute = express.Router();
const productDataModel = require("../DataModels/productDatamodel");

//localhost:9001/user/api/signinup
productRoute.post("/api/saveProduct", (req, res) => {
    let product = req.body //this will be sent as post request from userAction
    console.log(product)

    productDataModel.findOne({ name: req.body.name }).then((existingProduct) => {
        if (existingProduct) {
            console.log("sigin in success ", existingProduct);
            res.send(existingProduct)
        } else { //user is not present go for user creation
            //use schema to create new user object
            let newProduct = new productDataModel(product)//req.body
            newProduct.save().then((newProduct) => {//will get _id once document is created
                console.log("successful submit ", newProduct);
                res.send(newProduct)
            }).catch((err1) => {
                console.log("err submit", err1);
                res.send("error while submit")
            })
        }
    }).catch((err) => {
        console.log("err while submit ", err);
        res.send("Error while submit - existing product")
    })
})

productRoute.get("/api/getproducts", (req, res) => {
    productDataModel.find()
        .then((allproducts) => {
            res.send(allproducts)
        })
        .catch(() => {
            res.send("error while fetching users")
        })
})

module.exports = productRoute;