CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  text VARCHAR(200) NOT NULL,
  userid INTEGER(11) NOT NULL,
  roomname VARCHAR(20) 
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users ( 
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
	username VARCHAR(40) NOT NULL
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

