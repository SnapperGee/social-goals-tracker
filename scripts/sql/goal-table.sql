CREATE TABLE `goal` (
  `id` CHAR(36) NOT NULL,
  `title` CHAR(255) NOT NULL CHECK (CHAR_LENGTH(TRIM(`title`)) > 0),
  `description` VARCHAR(255) DEFAULT NULL CHECK (CHAR_LENGTH(TRIM(`description`)) > 0),
  `private` BOOLEAN NOT NULL DEFAULT FALSE,
  `user_id` CHAR(36) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id_fk` (`user_id`),
  CONSTRAINT `user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);
