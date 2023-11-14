CREATE TABLE `milestone` (
  `id` CHAR(36) NOT NULL DEFAULT UUID(),
  `title` CHAR(255) NOT NULL CHECK (CHAR_LENGTH(TRIM(`title`)) > 0),
  `description` VARCHAR(255) DEFAULT NULL CHECK (CHAR_LENGTH(TRIM(`description`)) > 0),
  `goal_id` CHAR(36) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `goal_id_fk` (`goal_id`),
  CONSTRAINT `goal_id_fk` FOREIGN KEY (`goal_id`) REFERENCES `goal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);
