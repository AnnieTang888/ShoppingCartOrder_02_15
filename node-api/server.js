console.log("Creating API using express server")

const express = require('express') //importing express package and use top level express method
const app = express() //using express function we initialize express application

const cors = require("cors");

const adminApp = express() //created to load the request for admin/backend work
const adminRoutes = require("./Router/admin-route")

const userApp = express() //created to load the request for admin/backend work
const userRoutes = require("./Router/user-route")

const studentApp = express()
const studentRoutes = require("./Router/student-route")

const productApp = express()
const productRoutes = require("./Router/product-route")

const cartApp = express()
const cartRoutes = require("./Router/cart-route")

const orderApp = express()
const orderRoutes = require("./Router/order-route")

app.use(cors()) //enabling cross origin resource sharing at root level
//setting up the middleware static to handle all the static files we need to serve to client
// serve static files like images css using static middleware 
app.use('/static', express.static('public')) //localhost:9001/static/alert.js

//json middle-ware for setting request content type to json in body
app.use(express.json({ limit: '2mb', extended: false }));

app.use('/admin', adminApp)
adminApp.use('/', adminRoutes)

app.use('/user', userApp) //http://localhost:9001/user/api/signinup
userApp.use('/', userRoutes)

app.use('/student', studentApp)
studentApp.use('/', studentRoutes)

app.use('/product', productApp)
productApp.use('/',productRoutes)

app.use('/cart', cartApp)   //http://localhost:9001/user/api/savetoCart
cartApp.use('/',cartRoutes)

app.use('/order', orderApp)   //http://localhost:9001/user/api/saveOrder
orderApp.use('/',orderRoutes)


app.listen(9001) //change the port for API

console.log("API is running at http://localhost:9001")