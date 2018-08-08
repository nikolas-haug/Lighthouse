import axios from "axios";


export default {
  //USERS MESSENGERS
  //**************************************/
  // Send a new user data to the express signup route
  sendNewUserInfo: function (newUser) {
    return axios.post('/signup', newUser);
  },

  // Send a user login data to the express signin route 
  sendPreviousUserData: function (user) {
    return axios.post('/signin', user);
  },

  //ENTRIES MESSENGERS
  //**************************************/
    // Get all entries
    getAllEntries: function () {
      return axios.get('/journal');
    },

    // Send a user login data to the express signin route 
    sendNewEntryInfo: function (newEntry, userid) {
    return axios.post('/journal/' + userid, newEntry);
      },

  // PROVIDERS API MESSENGERS
  //**************************************/
  
};