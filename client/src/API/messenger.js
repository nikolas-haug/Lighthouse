import axios from "axios";


export default {
  // Send a new user data to the express signup route
  sendNewUserInfo: function (newUser) {
    return axios.post('/signup', newUser);
  },

  // Send a user login data to the express signin route 
  sendPreviousUserData: function (user) {
    return axios.post('/signin', user);
  },
};