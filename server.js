const http = require('http');
const express = require('express');
const path = require('path');
const manageReservations = require('./data/manageReservations');
const getReservations = manageReservations[0];

const app = express();
const PORT = 3005;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// tell Express to serve static files in public and data directories
app.use(express.static("public"));
app.use(express.static("data"));

// Start the server & listen to incoming requests
app.listen(PORT, function() {
    console.log("We're running on port: " + PORT);
    console.log('server is running and listening on http://localhost:' + PORT)
});

// Routes
    // html pages
    app.get("/", function(req, res) {
        res.sendFile(path.join(`${__dirname}/public`, "index.html"));
        getReservations();
    });
    
    app.get("/reserve", function(req, res) {
    res.sendFile(path.join(`${__dirname}/public`, "reserve.html"));
    });

    app.get("/view", function(req, res) {
    res.sendFile(path.join(`${__dirname}/public`, "view.html"));
    });

    // routes to return json
    // reservations
    app.get("/api-reserve", function(req, res) {
    res.json(reservations);
    });

    // tables
    app.get("/api-tables", function(req, res) {
    res.json(tables);
    });

// array to hold reservations
var reservations = [
    {
    customerName: "yoda",
    customerPhone: "1-800-Yoda",
    customerEmail: "Jedi Master",
    customerID: 666,
    },
    {
    customerName: "Jason",
    customerPhone: "1-800-8888",
    customerEmail: "email@email.com",
    customerID: 777,
    },
    {
    customerName: "Bob",
    customerPhone: "1-800-9999",
    customerEmail: "bob@bob.com",
    customerID: 888,
    },
    {
    customerName: "Eric",
    customerPhone: "1-800-1010",
    customerEmail: "eric@eric.com",
    customerID: 999,
    },
    {
    customerName: "Gabe",
    customerPhone: "1-800-1111",
    customerEmail: "Gabe@gabe.com",
    customerID: 1000,
    },
]

// post new reservation
app.post("/api-reserve", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    
    let newReservation = req.body;
    
    console.log(newReservation);
    
    //add the json the user sent to the character array
    reservations.push(newReservation);
    
    //display the JSON to the users
    res.json(newReservation);
    });