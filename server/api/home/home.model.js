'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HomeSchema = new Schema(
  {
    listPrice: Number,
    addressLine1: String,
    addressLine2: String,
    city: String,
    state: String,
    zipcode: String,
    numberBedroom: Number,
    numberBathroom: Number,
    squareFootage: Number,
    yearBuild: Number,
    listingDate: Date,
    wjyImageUrls: Array,
    numberParking: Number,
    newConstruction: Number,
    hoa: Number,
    propertyDescription: String,
    lotSize: Number,
    kitchenDescription: String,
    style: String,
    coolingSystem: String,
    heatingSystem: String,
    numberStories: Number,
    parkingDescription: String,
    agentName: String,
    agentPhoneCountryCode: String,
    agentPhoneNumber: String,
    agentEmail: String
  },
  {
    collection: 'Home'
  }
);

module.exports = mongoose.model('Home', HomeSchema);
