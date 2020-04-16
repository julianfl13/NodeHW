const axios = require("axios");
const genMd = require('./generateMarkdown')
const api = {
getUser(username, data) {

    axios(`https://api.github.com/users/${username}`)
      .then(res => {
      
      
      genMd.generateMarkdown(res, data);
      
    });
  }

};


module.exports = api;



//async await 
//projects that modularize 
//api call in a separate file
//how to pass the file 
//how to export the api file
