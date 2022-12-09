// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());


// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;

const server = app.listen(port, listening);

function listening(){
    console.log(`Server is runing on localhost:${port}`);
}

// The GET Route
app.get('/getData', (req, res) =>{
    // console.log(projectData)
    res.send(projectData);
})

// The POST Rout
const data = [];

app.post('/addData', (req, res) => {

    projectData['date'] = req.body.date;
    projectData['temp']= req.body.temp;
    projectData['content'] = req.body.content;
    
    res.send(projectData);
    data.push(req.body);
    console.log(projectData);
    // console.log(data);
}) 