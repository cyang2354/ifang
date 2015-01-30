'use strict';

var _ = require('lodash');
var Home = require('./home.model');

// Get list of homes
exports.index = function(req, res) {
  var fields = 'listPrice city state zipcode numberBedroom numberBathroom propertyType squareFootage yearBuild wjyImageUrls';

  Home.find({}, fields, { limit: 100 }, function (err, homes) {
    if(err) { return handleError(res, err); }
    return res.json(200, homes);
  });
};

// All homes ranked
var allHomeRankedQuery = function(req, res) {
  Home.aggregate(
[
  {$match: 
    {$and: [
        {$or: 
            [{$and: [{propertyType: 'CND'}, {listPrice: {$gte: 300000}}]}, 
             {$and: [{propertyType: 'SFR'}, {listPrice: {$gte: 600000}}]}]},
        {$or: 
          [{$and: [{yearBuild: {$gte: 1978}}, {yearBuild: {$lte: 2000}}]}, 
           {$and: [{zipcode: {$in: [98004, 98005, 98006, 98007, 98008, 98009, 98015, 98105, 98115, 98185, 98145, 98195, 98116, 98136, 98126, 98106, 98199, 98119, 98109, 98121, 98101, 98104, 98107, 98103, 98117, 98039, 98040, 98033, 98083, 98034, 98027, 98029, 98074, 98075, 98052, 98056, 98059, 98072]}}, {yearBuild: {$gte: 2000}}]}]}]}},
  {$sort: 
    {listingDate: 1, yearBuild: -1, listPrice: -1}
}])}

// Get a single home
exports.show = function(req, res) {
  Home.findById(req.params.id, function (err, home) {
    if(err) { return handleError(res, err); }
    if(!home) { return res.send(404); }
    return res.json(home);
  });
};

// Get image urls for the photo gallery in main page
var topHomeImageUrls = function(req, res) {
  Home.aggregate(
[
  {$match: 
    {$and: [
        {$or: 
            [{$and: [{propertyType: 'CND'}, {listPrice: {$gte: 300000}}]}, 
             {$and: [{propertyType: 'SFR'}, {listPrice: {$gte: 600000}}]}]},
        {$or: 
          [{$and: [{yearBuild: {$gte: 1978}}, {yearBuild: {$lte: 2000}}]}, 
           {$and: [{zipcode: {$in: [98004, 98005, 98006, 98007, 98008, 98009, 98015, 98105, 98115, 98185, 98145, 98195, 98116, 98136, 98126, 98106, 98199, 98119, 98109, 98121, 98101, 98104, 98107, 98103, 98117, 98039, 98040, 98033, 98083, 98034, 98027, 98029, 98074, 98075, 98052, 98056, 98059, 98072]}}, {yearBuild: {$gte: 2000}}]}]}]}},
  {$sort: 
    {listingDate: 1, yearBuild: -1, listPrice: -1}},
  {$limit: 10},
  {$project: {wjyImageUrls: 1}}
])
}

// Query homes for a specific city area
var cityAreaQuery = function(req, res) {
  Home.find({cityArea: req.params.cityArea}, function (err, homes) {
    if(err) {return handleError(res, err);}
    return res.json(200, homes);
  });
}

// Query homes for a specific property type
var propertyTypeQuery = function(req, res) {
  Home.find({propertyType: req.params.propertyType}, function (err, homes) {
    if(err) {return handleError(res, err);}
    return res.json(200, homes);
  });
}

// Query homes based on number of bedrooms
var numberBedroomQuery = function(req, res) {
  Home.find({numberBedroom: req.params.numberBedroom}, function (err, homes) {
    if(err) {return handleError(res, err);}
    return res.json(200, homes);
  });
}
var numberBedroomGtQuery = function(req, res) {
  Home.find({numberBedroom: {$gt: req.params.numberBedroom}}, function (err, homes) {
    if(err) {return handleError(res, err);}
    return res.json(200, homes);
  });
}

// Qeury homes based on price
var listPriceLtQuery = function(req, res) {
  Home.find({listPrice: {$lt: req.params.listPrice}}, function (err, homes) {
    if(err) {return handleError(res, err);}
    return res.json(200, homes);
  });
}
var listPriceGtQuery = function(req, res) {
  Home.find({listPrice: {$gt: req.params.listPrice}}, function (err, homes) {
    if(err) {return handleError(res, err);}
    return res.json(200, homes);
  });
}
var listPriceRangeQuery = function(req, res) {
  Home.find({$and: [{listPrice: {$lt: req.params.highPrice}}, {listPrice: {$gt: req.params.lowPrice}}]}, function (err, homes) {
    if(err) {return handleError(res, err);}
    return res.json(200, homes);
  });
}

// Query homes based on building area
var squareFootageLtQuery = function(req, res) {
  Home.find({squareFootage: {$lt: req.params.squareFootage}}, function (err, homes) {
    if(err) {return handleError(res, err);}
    return res.json(200, homes);
  });
}
var squareFootageGtQuery = function(req, res) {
  Home.find({squareFootage: {$gt: req.params.squareFootage}}, function (err, homes) {
    if(err) {return handleError(res, err);}
    return res.json(200, homes);
  });
}
var squareFootageRangeQuery = function(req, res) {
  Home.find({$and: [{squareFootage: {$lt: req.params.highSquareFootage}}, {squareFootage: {$gt: req.params.lowSquareFootage}}]}, function (err, homes) {
    if(err) {return handleError(res, err);}
    return res.json(200, homes);
  });
}

// Query homes based on lot size
var lotSizeLtQuery = function(req, res) {
  Home.find({lotSize: {$lt: req.params.lotSize}}, function (err, homes) {
    if(err) {return handleError(res, err);}
    return res.json(200, homes);
  });
}
var lotSizeGtQuery = function(req, res) {
  Home.find({lotSize: {$gt: req.params.lotSize}}, function (err, homes) {
    if(err) {return handleError(res, err);}
    return res.json(200, homes);
  });
}
var lotSizeRangeQuery = function(req, res) {
  Home.find({$and: [{lotSize: {$lt: req.params.highlotSize}}, {squareFootage: {$gt: req.params.lowlotSize}}]}, function (err, homes) {
    if(err) {return handleError(res, err);}
    return res.json(200, homes);
  });
}

// Query homes based on year build
var newConstructionQuery = function(req, res) {
  Home.find({newConstruction: 1}, function (err, homes) {
    if(err) {return handleError(res, err);}
    return res.json(200, homes);
  });
}
var olderThanQuery = function(req, res) {
  Home.find({yearBuild: {$lt: getYears(req.params.age)}}, function (err, homes) {
    if(err) {return handleError(res, err);}
    return res.json(200, homes);
  });
}
var newerThanQuery = function(req, res) {
  Home.find({yearBuild: {$gt: getYears(req.params.age)}}, function (err, homes) {
    if(err) {return handleError(res, err);}
    return res.json(200, homes);
  });
}
var ageRangeQuery = function(req, res) {
  Home.find({$and: [{yearBuild: {$lt: getYears(req.params.lowAge)}}, {yearBuild: {$gt: getYears(req.params.highAge)}}]}, function (err, homes) {
    if(err) {return handleError(res, err);}
    return res.json(200, homes);
  });
}

// Error handler
function handleError(res, err) {
  return res.send(500, err);
}

// Calculate the year build
function getYears(age) {
  var currentTime = new Date();
  var currentYear = currentTime.getFullYear();
  return currentYear - age;
}