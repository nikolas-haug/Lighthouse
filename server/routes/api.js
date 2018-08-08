const express = require("express");
const router = express.Router();
const axios = require("axios");

const URL = "https://api.betterdoctor.com/2016-03-01/doctors";
const KEY = "aa23ac52a8425f4cfb8dc8c3dbde7f43";


router.get('/api/providers/:keyword/:location', function(req, res) {


    axios.get(`${URL}?q=${req.params.keyword}&location=${req.params.location}&skip=0&limit=10&user_key=${KEY}`)
        .then((response) => {
            
            // console.log(req.ip);
            // console.log(response.data.data[0].practices[0].name);
            // console.log(response.data.data[0].practices[0].visit_address);
            res.json(response.data);

            console.log(response.data);
        }).catch((err) => {
            console.log(err);
        });

    console.log("api route connected!");
});






module.exports = router;