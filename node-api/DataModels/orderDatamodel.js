
let mongooseObj = require("mongoose");
schemaObj = mongooseObj.Schema;

mongooseObj.connect("mongodb://127.0.0.1/assessment4_0113");

let OrderSchema = new schemaObj({
    userid: { type: String, required: true },
    cart: { type: Object, required: true },
    dateTime: {type: Date, default: Date.now},
    status: { type: String, required: true, default: 'placed' },
}, {
    versionKey: false
});

let OrderModel = mongooseObj.model("order", OrderSchema);

module.exports = OrderModel;





