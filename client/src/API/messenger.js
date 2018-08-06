import axios from "axios";


export default {
  // Send a new user data to the database
  sendNewUserInfo: function (newUser) {
    return axios.post('/signup', newUser);
  },

  // Send a user login data to the database
  // sendPreviousUserData: function (previousUser) {
  //   return axios.post('/signin', previousUser);
  // },
};