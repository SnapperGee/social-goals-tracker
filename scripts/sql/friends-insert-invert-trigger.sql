DELIMITER //

CREATE DEFINER=`hisqazky5cqzrzpy`@`%` TRIGGER `invert_inserted_friend_source_target`
AFTER INSERT ON `friends`
FOR EACH ROW
BEGIN
    IF NOT (SELECT EXISTS(SELECT NULL FROM `friends` WHERE NEW.source = friends.target AND NEW.target = friends.source)) THEN
        INSERT INTO `friends`(`source`, `target`) VALUES (NEW.target, NEW.source);
    END IF;
END //

DELIMITER ;
