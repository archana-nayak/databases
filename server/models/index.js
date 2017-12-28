var db = require('../db');

module.exports = {
  messages: {

    get: function (callback) {
    	// a function which produces all the messages
    	var queryString = 'select messages.id, messages.text, messages.roomname,\
    	 users.username from messages left outer join users on \
    	 messages.userid = users.id order by messages.id desc';
    	db.query(queryString,
    	  function(err, result) {
    	  	if (err) {
    	  		throw err;
    	  	}
    			callback(result);
    	});
    }, 
    post: function (params, callback) {
    	// a function which can be used to insert a message into the database
    	var queryString = 'insert into messages (text, userid,\
    	 roomname) values (?, (select id from users where username = ? limit 1), ?)';
    	db.query(queryString, params, function(err, result) {
    	 	if (err) {
    	 	  throw err;
    	 	}
    	  callback(result);
    	});
    } 
  },

  users: {
    // Ditto as above.

    get: function (callback) {
    	//get all users from the users table
    	var queryString = 'select username from users';
    	db.query(queryString, function(err, result) {
    		callback(result);
    	});
    },
    //pass an array of parameter values for the insert
    post: function (params, callback) {
    	//add a user into the users table
    	var queryString = 'insert into users (username) values (?)';
    	db.query(queryString, params, function(err, result) {
    			callback(result);
    	});
    }
  }
};

