DELIMITER //

CREATE DEFINER=`hisqazky5cqzrzpy`@`%` TRIGGER `delete_inverted_friend_source_target`
AFTER DELETE ON `friends`
FOR EACH ROW
BEGIN
    DELETE FROM `friends` WHERE OLD.source = friends.target AND OLD.target = friends.source;
END //

DELIMITER ;
