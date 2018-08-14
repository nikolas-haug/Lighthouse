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
  // get entry to be edited
  getEntryToBeEdited: function (entry_id) {
    return axios.get('/journal/' + entry_id);
  },

  // Send entry to be updated 
  sendEditedEntryInfo: function (entry_id, editedEntry) {
    return axios.put('/journal/' + entry_id, editedEntry);
  },

  // Send entry to be deleted
  sendDeleteEntryInfo: function (entry_id) {
    return axios.delete('/' + entry_id);
  },


  //**************************************/
  //ENTRIES SERVER REQUESTS
  //**************************************/
  // Get all entries
  getAllUserEntries: function (author) {
    return axios.get('/user_journals/'+ author);
  },
  //**************************************/
  //COMMENTS SERVER REQUESTS
  //**************************************/
  // Send new entry and user data to the express server route 
  sendNewCommentInfo: function (entry_id, newComment) {
    return axios.post('/comment/' + entry_id, newComment, );
  },

  // get comment to be edited 
  getCommentToBeEdited: function (comment_id) {
    return axios.get('/comment/' + comment_id);
  },

  // Send comment to be updated 
  sendEditedCommentInfo: function (comment_id, editedComment) {
    return axios.put('/comment/' + comment_id, editedComment);
  },

  // Send comment to be deleted 
  sendDeleteCommentInfo: function (comment_id) {
    return axios.delete('/comment/' + comment_id);
  },

  //**************************************/
  //ENTRIES SERVER REQUESTS
  //**************************************/
  // Send like
  sendLikeForAction: function (comment_id, like) {
    return axios.post('/comments/likes/' + comment_id, like );
  },


  //**************************************/
  // PROVIDERS API REQUEST
  //**************************************/
  // send a query to the betterdoctors api
  getProviders: function (keyword, location, USstate, specialty) {
    return axios.get('/api/providers/' + keyword + '/' + location + '/' + USstate + '/' + specialty);
  },

  // send a query to the google custom search api
  getCustomArticles: function (searchTerm) {
    return axios.get('/api/google/' + searchTerm);
  }

};