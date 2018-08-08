import axios from "axios";

const URL = "https://api.betterdoctor.com/2016-03-01/doctors";
const KEY = "aa23ac52a8425f4cfb8dc8c3dbde7f43";

export default {
  getProviders(keyword, location) {
    console.log("route reached!");
    return axios.get(`${URL}?q=${keyword}&location=${location}&skip=0&limit=10&user_key=${KEY}`)
  }  
}