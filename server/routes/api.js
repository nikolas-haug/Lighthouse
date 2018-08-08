const express = require("express");
const router = express.Router();
const axios = require("axios");

const URL = "https://api.betterdoctor.com/2016-03-01/doctors";
const KEY = "aa23ac52a8425f4cfb8dc8c3dbde7f43";

router.get('/api/providers/:keyword/:location/:USstate/:specialty', function(req, res) {
    // make the api query with user params set from services component client side
    axios.get(`${URL}?q=${req.params.keyword}&specialty_uid=${req.params.specialty}&location=${req.params.USstate}-${req.params.location}&skip=0&limit=10&user_key=${KEY}`)
        .then((response) => {
            // send the response as json
            res.json(response.data);

        }).catch((err) => {
            console.log(err);
        });
    // check the connection from client side to server side
    console.log("api route connected!");
});

module.exports = router;