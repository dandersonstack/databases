CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql;
 *  to create the database and the tables.*/


-- ---
-- Table 'messages'
-- 
-- ---

DROP TABLE IF EXISTS `messages`;

CREATE TABLE MESSAGES (
  `id` INTEGER AUTO_INCREMENT,
  `text` CHAR(140) NULL, 
  `id_users` INTEGER NOT NULL, 
  `id_rooms` INTEGER NOT NULL,
  PRIMARY KEY (`id`));

-- ---
-- Table 'users'
-- 
-- ---

DROP TABLE IF EXISTS `users`;
    
CREATE TABLE `users` (
  `id` INTEGER AUTO_INCREMENT,
  `userName` CHAR(20) UNIQUE,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'rooms'
-- 
-- ---

DROP TABLE IF EXISTS `rooms`;
    
CREATE TABLE `rooms` (
  `id` INTEGER AUTO_INCREMENT,
  `roomName` CHAR(20) UNIQUE,
  PRIMARY KEY (`id`)
);



-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `messages` ADD FOREIGN KEY (id_users) REFERENCES `users` (`id`);
ALTER TABLE `messages` ADD FOREIGN KEY (id_rooms) REFERENCES `rooms` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `rooms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `messages` (`id`,`text`,`id_users`,`id_rooms`) VALUES
-- ('','','','');
-- INSERT INTO `users` (`id`,`name`) VALUES
-- ('','');
-- INSERT INTO `rooms` (`id`,`name`) VALUES
-- ('','');