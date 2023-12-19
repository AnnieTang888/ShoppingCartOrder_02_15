console.log("Creating API using express server")

const express = require('express') 
const app = express() 

app.get('/student', function (req, res) {
    res.send('student')
})


app.get('/getStudentDetails', function (req, res) {
    res.json({
        Name: "Annie",
        Age: "28",
        Address: "San Jose",
        Session: "WebPack React Project",
        command: "npm start"
    })
})

//api using query-string => localhost:3000/query?name=Annie&age=29&address=California&id=88
app.get('/query', (req, res) => {
    let qs = req.query //request object converts query string into JSON 
    console.log(qs)

    if (qs.id == 88) {
        res.json(qs)
    } else {
        res.send("Invalid ID!!!!")
    }

})
app.get('*', function (req, res) {
    res.send("<h1>API is not ready yet!!</h1>")
})
app.listen(3000)

console.log("API is ruuning at http://localhost:3000")