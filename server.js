const http = require('http');
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3005;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Start the server & listen to incoming requests
app.listen(PORT, function() {
    console.log("We're running on port: " + PORT);
    console.log('server is running and listening on http://localhost:' + PORT)
});

// Routes
    // html pages
    app.get("/", function(req, res) {
        res.sendFile(path.join(`${__dirname}/public`, "index.html"));
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
    }]

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