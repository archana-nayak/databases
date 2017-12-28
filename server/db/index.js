var Sequelize  = require('Sequelize');
var orm = new Sequelize('chat', 'root', '');//initialized with database name, username and password

//user orm to create new model objects
var User = orm.define('user', {
  username: Sequelize.STRING
});

var Message = orm.define('message', {
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

//define the relationship between different model objects declared
User.hasMany(Message);
Message.belongsTo(User);//two-way relationship has to be provided
//This tells it that a foreign key resides in the message that refers
//to a column in User object


User.sync();//synchronize the database with the schema just created
Message.sync();


exports.User = User;
exports.Message = Message;