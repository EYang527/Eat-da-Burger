DROP DATABASE IF EXISTS `burgers_db`;
CREATE DATABASE `burgers_db`;
USE `burgers_db`;


CREATE TABLE 'burgers' (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`burgerName` VARCHAR( 255) NOT NULL,
	`devoured` BOOLEAN NOT NULL,

	/* Set ID as primary key */
	PRIMARY KEY ( `id` )
);