// requires neccessery packages
const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv').config();
const port = process.env.PORT

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// make a get request
app.get("/", (req, res) => {
    res.send(__dirname + "/index.html"); // get the route dir to trigger
})

// make a post request from the client 
app.post("/", (req, res) => {
    try {
        const firstNumb = parseInt(req.body.firstNum); // parsing the value as float data type
        const secondNumb = parseInt(req.body.secondNum); // parsing the value as float data type

        const sumNum = firstNumb + secondNumb;
        res.send(`your result is ${sumNum}`); // sending back to the client
    } catch (error) {
        console.log(error.message);
    }
})
 
// make a get request
app.get("/radius", function (req, res) {
    res.send(__dirname + "/radius") // get the route dir to trigger 
})

// make a post request from the client 
app.post("/radius", function (req, res) {
    const rad = parseFloat(req.body.radius); // parsing the value as float data type

    const radius = 2 * Math.PI * Math.pow(rad, 2);

    res.send(`the circle radius is ${radius}`) // sending back to the client
})

app.listen(port, () => {
    console.log('server running on port ' + port);
})