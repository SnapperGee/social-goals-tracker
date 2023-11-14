CREATE TABLE `user` (
  `id` char(36) NOT NULL,
  `name` char(70) NOT NULL CHECK (char_length(trim(`name`)) > 0),
  `password` char(100) NOT NULL CHECK (char_length(`password`) > 0),
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
);
