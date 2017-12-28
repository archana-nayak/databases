var db = require('../db');
  


module.exports = {
  messages: {
    get: function (req, res) {
    // a function which handles a get request for all messages  
      db.Message.findAll({include: db.User})//left inner join
      .then(function(messages) {
        console.log('in controller, request', messages);
        res.json(messages);
      });
    },
    // a function which handles posting a message to the database 
    post: function (req, res) {
      // console.log('in controller ', req.body);
      var param = {username: req.body['username']};
      db.User.findOrCreate({where: param})
      .then(function(user) {
        var params = {
          text: req.body['text'], 
          userid: user.id,
          roomname: req.body['roomname']
        };
        db.Message.create(params)
        .then(function(messages) {
          res.status(201).json(messages);
        });

      });
    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      db.User.findAll()
      .then(function(users) {
        res.json(users);
      }); 
    },
    post: function (req, res) {
      var params = [req.body['username']];
      db.User.create(params)
      .then(function(results) {
        res.sendStatus(201);
      });
    }
  }
};

