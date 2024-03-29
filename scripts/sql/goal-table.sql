CREATE TABLE `goal` (
  `id` CHAR(36) NOT NULL DEFAULT UUID(),
  `title` CHAR(255) NOT NULL CHECK (CHAR_LENGTH(TRIM(`title`)) > 0),
  `accomplished` BOOLEAN NOT NULL DEFAULT FALSE,
  `private` BOOLEAN NOT NULL DEFAULT FALSE,
  `user_id` CHAR(36) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id_fk` (`user_id`),
  CONSTRAINT `user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);
