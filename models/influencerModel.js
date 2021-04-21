const mongoose = require('mongoose');
const slugify = require('slugify');
// const validator = require('validator');

const influencerschema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, 'A influencer must have a name'],
      trim: true,
      maxlength: [40, 'A influencer name must have less or equal then 40 characters'],
    },
    lastname: {
      type: String,
      required: [true, 'A influencer must have a name'],
      trim: true,
      maxlength: [40, 'A influencer name must have less or equal then 40 characters'],
    },
    email: {
      type: String,
      unique: true, 
    },
    slug: String,
    phone: {
      type: Number,
    },
    twitterurl: {
      type: String,
      unique: true,
    },
    linkedinurl: {
      type: String,
      unique: true,
    },
    youtubeurl: {
      type: String,
      unique: true,
    },
    title: {
      type: String,
      unique: true,
    },
    source: {
      type: String,
      unique: true,
    },
    beats: {
      type: String,
      unique: true,
    },
    street: {
      type: String,
      unique: true,
    },
    city: {
      type: String,
      unique: true,
    },
    state: {
      type: String,
      unique: true,
    },
    zip: {
      type: Number,
      unique: true,
    },
    country: {
      type: String,
      unique: true,
    },
    okstatus: {
      type: String,
      unique: true,
    },
    instagram: {
      type: String,
      unique: true,
    },
    weburl: {
      type: String,
      unique: true,
    },
    
  
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);



const Tour = mongoose.model('influencer', influencerschema);

module.exports = Tour;
