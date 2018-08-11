import axios from "axios";


export default {
  //**************************************/
  //USERS SERVER REQUESTS
  //**************************************/
  // Send a new user data to the express signup route
  sendNewUserInfo: function (newUser) {
    return axios.post('/signup', newUser);
  },

  // Send a user login data to the express signin route 
  sendPreviousUserData: function (user) {
    return axios.post('/signin', user);
  },
  //**************************************/
  //ENTRIES SERVER REQUESTS
  //**************************************/
  // Get all entries
  getAllEntries: function () {
    return axios.get('/journal');
  },

  // Send new entry and user data to the express server route 
  sendNewEntryInfo: function (newEntry, userid) {
    return axios.post('/journal/' + userid, newEntry);
  },
  // get entry to be deleted 
  getEntryToBeEditedInfo: function (entry_id) {
    return axios.get('/journal/' + entry_id);
  },

    // Send entry to be deleted data to the express server route 
    sendEditedEntryInfo: function (entry_id, editedEntry) {
      return axios.put('/journal/' + entry_id, editedEntry);
    },


  // Send entry to be deleted data to the express server route 
  sendDeleteEntryInfo: function (entry_id) {
    return axios.delete('/' + entry_id);
  },

  //**************************************/
  //COMMENTS SERVER REQUESTS
  //**************************************/
 // Send new entry and user data to the express server route 
 sendNewCommentInfo: function (entry_id, newComment) {
  return axios.post('/comment/' +  entry_id, newComment,);
},


 // Send comment to be deleted data to the express server route 
 sendDeleteCommentInfo: function (comment_id) {
  return axios.delete('/comment/' + comment_id);
},



  // PROVIDERS API MESSENGERS
  //**************************************/
    // send a query to the betterdoctors api
    getProviders: function (keyword, location, USstate, specialty) {
      return axios.get('/api/providers/' + keyword + '/' + location + '/' + USstate + '/' + specialty);
    }

};