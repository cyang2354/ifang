'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AgentSchema = new Schema(
  {
    email: String,
    phone: String,
    cityArea: String,
    chineseName: String,
    nickName: String,
    firstName: String,
    middleName: String,
    lastName: String,
    qq: String,
    wechat: String,
    englishSpeak: Number,
    mandarinSpeak: Number,
    cantoneseSpeak: Number,
    imageUri: String,
    mlsArea: String,
    mlsId: String,
    lastYearTransactions: Number,
    careerYears: Number,
    businessName: String,
    // businessAddress: TBD
    businessEmail: String,
    // businessPhone1: TBD
    // businessPhone2: TBD
    // contactPhone1: TBD
    // contactPhone2: TBD
  },
  {
    collection: 'Agent'
  }
);

module.exports = mongoose.model('Agent', AgentSchema);