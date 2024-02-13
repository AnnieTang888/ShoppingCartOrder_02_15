let express = require("express");
let router = express.Router({}),
OrderDataModel = require("../DataModels/orderDatamodel");

//order api's
router.post("/api/saveOrder",(req, res)=>{

    let newOrder = new OrderDataModel({
        userid: req.body.userid,
        cart: req.body.cart,
        dateTime: new Date(),      
    });

    newOrder.save().then((data)=>{                                  
        res.json(data);
    }).catch((err)=>{
        res.send("Error Occurred"+ err);
    });
});   
                

router.post("/api/getUserOrder",(req, res)=>{
    OrderDataModel.find({userid: req.body.userid})
        .then((orders) => { res.json(orders) })
        .catch((err)=>{res.send("Error Occurred"+ err);})
});

module.exports = router;

//in future need to put this datamodel in user itself, so that we can have best use of mongodb
