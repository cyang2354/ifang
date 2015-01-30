'use strict';

var _ = require('lodash');
var Agent = require('./agent.model');
var fields = '-status -password -createdTime -modifiedTime -failLogin';

// Get list of agents
exports.index = function(req, res) {
  Agent.find({}, fields, function (err, agents) {
    if(err) { return handleError(res, err); }
    return res.json(200, agents);
  });
};

// Get a single agent
exports.show = function(req, res) {
  Agent.findById(req.params.id, fields, function (err, agent) {
    if(err) { return handleError(res, err); }
    if(!agent) { return res.send(404); }
    return res.json(agent);
  });
};

// Career years queries
var careerYearsQuery = function(req, res) {
  Agent.find({careerYears: {$gte: req.params.careerYears}}, fields, function(err, agents){
    if(err) {return handleError(res, err);}
    return res.json(200, agents);
  });
}

// Last year transactions queries
var lastYearTransactionsQuery = function(req, res){
  Agent.find({lastYearTransactions: {$gte: req.params.lastYearTransactions}}, fields, function(err, agents){
    if(err) {return handleError(res, err);}
    return res.json(200, agents);
  });
}

// Ratings queries TBD - not in MVP
var ratingsQuery = function(req, res){
  Agent.find({ratings: {$gte: req.params.ratings}}, fields, function(err, agents){
    if(err) {return handleError(res, err);}
    return res.json(200, agents);
  });
}

// Language queries
var englishSpeakQuery = function(req, res){
  Agent.find({englishSpeak: 1}, fields, function(err, agents){
    if(err) {return handleError(res, err);}
    return res.json(200, agents);
  });
}
var mandarinSpeakQuery = function(req, res){
  Agent.find({madarinSpeak: 1}, fields, function(err, agents){
    if(err) {return handleError(res, err);}
    return res.json(200, agents);
  });
}
var cantoneseSpeakQuery = function(req, res){
  Agent.find({cantoneseSpeak: 1}, fields, function(err, agents){
    if(err) {return handleError(res, err);}
    return res.json(200, agents);
  });
}

// Name queries
var lastNameQuery = function(req, res){
  Agent.find({lastName: req.params.lastName}, fields, function(err, agents){
    if(err) {return handleError(res, err);}
    return res.json(200, agents);
  });
}
var firsttNameQuery = function(req, res){
  Agent.find({firstName: req.params.firstName}, fields, function(err, agents){
    if(err) {return handleError(res, err);}
    return res.json(200, agents);
  });
}
var fullNameQuery = function(req, res){
  Agent.find({lastName: req.params.lastName, firstName: req.params.firstName}, fields, function(err, agents){
    if(err) {return handleError(res, err);}
    return res.json(200, agents);
  });
}

// Get 3 random agents
function getThreeRandomAgents(req, res, err){
  var query = {'businessAddress.city': req.params.city};
  var numOfAgents = Agent.count(query);
  var randNum = Math.floor(Math.random() * numOfAgents);
  return function(query, randNum){
    Agent.find(query, fields, function(err, agents){
      if(err) {return handleError(res, err);}
      return res.json(200, agents);
    }).limit(3).skip(randNum)
  };
}

// Error handler
function handleError(res, err) {
  return res.send(500, err);
}