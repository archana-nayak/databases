var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
    // a function which handles a get request for all messages
      models.messages.get(function(err, messages) {
        res.json(messages);
      });
    },
    // a function which handles posting a message to the database 
    post: function (req, res) {
      var params = [req.body[text], 
        req.body[username], req.body[roomname]];
      models.messages.post(params, function(err, result) {
        if (err) {
          throw err;
        }
        res.json(201);
      });
    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, users) {
        res.json(users);//send back as json through express
      });
    },
    post: function (req, res) {
      var params = [req.body[username]];
      models.users.post(params, function(err, results) {
        res.json(results);
      });
    }
  }
};

