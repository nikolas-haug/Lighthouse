const express = require("express");
const router = express.Router();
const axios = require("axios");

// variables for the betterdoctor search
const URL = "https://api.betterdoctor.com/2016-03-01/doctors";
const betterdoctorKEY;

// variables for google custom search
const searchEngineID;
const customSearchKey;

// api route to retrieve the betterdoctor data
router.get('/api/providers/:keyword/:location/:USstate/:specialty', function(req, res) {
    // make the api query with user params set from services component client side
    axios.get(`${URL}?q=${req.params.keyword}&specialty_uid=${req.params.specialty}&location=${req.params.USstate}-${req.params.location}&skip=0&limit=10&user_key=${betterdoctorKEY}`)
        .then((response) => {
            // send the response as json
            res.json(response.data);

        }).catch((err) => {
            console.log(err);
        });
    // check the connection from client side to server side
    console.log("api route connected!");
});

// api route for the custom google search
router.get('/api/google/:search_term', function(req, res) {
    // make the api query with user params set from the searchbar component client side
    axios.get(`https://www.googleapis.com/customsearch/v1?key=${customSearchKey}&cx=${searchEngineID}&q=${req.params.search_term}`)
        .then(function(response) {
            
            for(let i = 0; i < response.data.items.length; i++) {
                console.log("======================================");
                console.log(response.data.items[i].title);
                console.log(response.data.items[i].link);
                console.log(response.data.items[i].snippet);
                console.log("======================================");
            }
            // send the response as json
            res.json(response.data);
        }).catch(function(err) {
            console.log(err);
        });
    // check the connection from client to server side
    console.log("google api route connected!");
});

module.exports = router;