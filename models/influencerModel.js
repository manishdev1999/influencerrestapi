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
    },
    slug: String,
    phone: {
      type: Number,
    },
    twitterurl: {
      type: String,
    },
    linkedinurl: {
      type: String,
    },
    youtubeurl: {
      type: String,
    },
    title: {
      type: String,
    },
    source: {
      type: String,
    },
    beats: {
      type: String,
    },
    street: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
      unique: true,
    },
    zip: {
      type: Number,
    },
    country: {
      type: String,
    },
    okstatus: {
      type: String,
    },
    instagram: {
      type: String,
    },
    weburl: {
      type: String,
    },
    
  
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);



const Tour = mongoose.model('influencer', influencerschema);

module.exports = Tour;
