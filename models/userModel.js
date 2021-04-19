const mongoose = require('mongoose');
const slugify = require('slugify');
// const validator = require('validator');

const userschema = new mongoose.Schema(
  {
  
    email: {
      type: String,
    },
    apikey: {
      type: String,

    },

  
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);



const users = mongoose.model('user', userschema);

module.exports = users;
