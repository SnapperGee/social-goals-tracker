CREATE TABLE `user` (
  `id` CHAR(36) NOT NULL,
  `name` CHAR(70) NOT NULL CHECK (CHAR_LENGTH(TRIM(`name`)) > 0),
  `password` CHAR(100) NOT NULL CHECK (CHAR_LENGTH(`password`) > 0),
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
);
