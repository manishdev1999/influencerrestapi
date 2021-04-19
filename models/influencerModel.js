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
      required: [true, 'A influencer must have a name'],
      unique: true, 
    },
    slug: String,
    phone: {
      type: Number,
      required: [true, 'A influencer must have a phone number ']
    },
    twitterurl: {
      type: String,
      required: [true, 'A influencer must have a url'],
      unique: true,
    },
    linkedinurl: {
      type: String,
      required: [true, 'A influencer must have a url'],
      unique: true,
    },
    youtubeurl: {
      type: String,
      required: [true, 'A influencer must have a url'],
      unique: true,
    },
    title: {
      type: String,
      required: [true, 'A influencer must have a title'],
      unique: true,
    },
    source: {
      type: String,
      required: [true, 'A influencer must have a title'],
      unique: true,
    },
    beats: {
      type: String,
      required: [true, 'A influencer must have a title'],
      unique: true,
    },
    street: {
      type: String,
      required: [true, 'A influencer must have a title'],
      unique: true,
    },
    city: {
      type: String,
      required: [true, 'A influencer must have a title'],
      unique: true,
    },
    state: {
      type: String,
      required: [true, 'A influencer must have a title'],
      unique: true,
    },
    zip: {
      type: Number,
      required: [true, 'A influencer must have a title'],
      unique: true,
    },
    country: {
      type: String,
      required: [true, 'A influencer must have a title'],
      unique: true,
    },
    okstatus: {
      type: String,
      required: [true, 'A influencer must have a title'],
      unique: true,
    },
    instagram: {
      type: String,
      required: [true, 'A influencer must have a title'],
      unique: true,
    },
    weburl: {
      type: String,
      required: [true, 'A influencer must have a title'],
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
