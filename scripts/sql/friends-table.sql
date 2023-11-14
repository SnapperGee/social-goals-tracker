CREATE TABLE `friends` (
  `source` CHAR(36) NOT NULL CHECK (`source` <> `target`),
  `target` CHAR(36) NOT NULL CHECK (`target` <> `source`),
  PRIMARY KEY (`source`,`target`),
  KEY `target_fk` (`target`),
  CONSTRAINT `source_fk` FOREIGN KEY (`source`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `target_fk` FOREIGN KEY (`target`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);
