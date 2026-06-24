-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `crixus` DEFAULT CHARACTER SET utf8 ;
USE `crixus` ;

-- -----------------------------------------------------
-- Table `mydb`.`Team`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `crixus`.`Team` (
  `team_id` INT NOT NULL,
  `team_label` VARCHAR(50) NULL,
  PRIMARY KEY (`team_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `crixus`.`User` (
  `user_id` INT NOT NULL,
  `first_name` VARCHAR(50) NOT NULL,
  `last_name` VARCHAR(50) NULL,
  `password` VARCHAR(255) NOT NULL,
  `email` VARCHAR(100) NULL,
  `birth_date` DATE NULL,
  `wallet_gold` DOUBLE NULL,
  `username` VARCHAR(100) NULL,
  `Team_team_id` INT NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `password_UNIQUE` (`password` ASC) VISIBLE,
  INDEX `fk_User_Team1_idx` (`Team_team_id` ASC) VISIBLE,
  CONSTRAINT `fk_User_Team1`
    FOREIGN KEY (`Team_team_id`)
    REFERENCES `crixus`.`Team` (`team_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



-- -----------------------------------------------------
-- Table `mydb`.`Weapon`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `crixus`.`Weapon` (
  `weapon_id` INT NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `appearance` VARCHAR(200) NULL,
  `damage` INT NOT NULL,
  `type` VARCHAR(45) NULL,
  `price` DOUBLE NULL,
  `rarity` INT NULL,
  PRIMARY KEY (`weapon_id`))
ENGINE = InnoDB;





-- -----------------------------------------------------
-- Table `mydb`.`Armour`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `crixus`.`Armour` (
  `armour_id` INT NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `appearance` VARCHAR(200) NULL,
  `damage_protection` INT NOT NULL,
  `type` VARCHAR(50) NULL,
  `price` DOUBLE NULL,
  `rarity` INT NULL,
  PRIMARY KEY (`armour_id`))
ENGINE = InnoDB;







-- -----------------------------------------------------
-- Table `mydb`.`Fighter`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `crixus`.`Fighter` (
  `fighter_id` INT NOT NULL,
  `first_name` VARCHAR(50) NOT NULL,
  `last_name` VARCHAR(50) NULL,
  `appearance` VARCHAR(300) NULL,
  `strength` INT NULL,
  `dexterity` INT NULL,
  `constitution` INT NULL,
  `intelligence` INT NULL,
  `salary` DOUBLE NULL,
  `Weapons_weapon_id` INT NOT NULL,
  `Armour_armour_id` INT NOT NULL,
  `User_user_id` INT NOT NULL,
  `Team_team_id` INT NOT NULL,
  PRIMARY KEY (`fighter_id`),
  INDEX `fk_Fighters_Weapons_idx` (`Weapons_weapon_id` ASC) VISIBLE,
  INDEX `fk_Fighters_Armour1_idx` (`Armour_armour_id` ASC) VISIBLE,
  INDEX `fk_Fighters_users1_idx` (`User_user_id` ASC) VISIBLE,
  INDEX `fk_Fighter_Team1_idx` (`Team_team_id` ASC) VISIBLE,
  CONSTRAINT `fk_Fighters_Weapons`
    FOREIGN KEY (`Weapons_weapon_id`)
    REFERENCES `crixus`.`Weapon` (`weapon_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Fighters_Armour1`
    FOREIGN KEY (`Armour_armour_id`)
    REFERENCES `crixus`.`Armour` (`armour_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Fighters_users1`
    FOREIGN KEY (`User_user_id`)
    REFERENCES `crixus`.`User` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Fighter_Team1`
    FOREIGN KEY (`Team_team_id`)
    REFERENCES `crixus`.`Team` (`team_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



-- -----------------------------------------------------
-- Table `mydb`.`Battle`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `crixus`.`Battle` (
  `battle_id` INT NOT NULL,
  `battle_date` DATE NULL,
  PRIMARY KEY (`battle_id`))
ENGINE = InnoDB;
       

-- -----------------------------------------------------
-- Table `mydb`.`Team_has_Battle`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `crixus`.`Team_has_Battle` (
  `Team_team_id` INT NOT NULL,
  `Battle_battle_id` INT NOT NULL,
  `result` BINARY NULL,
  `winnings_gold` DOUBLE NULL,
  PRIMARY KEY (`Team_team_id`, `Battle_battle_id`),
  INDEX `fk_Team_has_Battle_Battle1_idx` (`Battle_battle_id` ASC) VISIBLE,
  INDEX `fk_Team_has_Battle_Team1_idx` (`Team_team_id` ASC) VISIBLE,
  CONSTRAINT `fk_Team_has_Battle_Team1`
    FOREIGN KEY (`Team_team_id`)
    REFERENCES `crixus`.`Team` (`team_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Team_has_Battle_Battle1`
    FOREIGN KEY (`Battle_battle_id`)
    REFERENCES `crixus`.`Battle` (`battle_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



-- -----------------------------------------------------
-- Table `mydb`.`Fighter_has_Battle`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `crixus`.`Fighter_has_Battle` (
  `Fighter_fighter_id` INT NOT NULL,
  `Battle_battle_id` INT NOT NULL,
  `result` BINARY NULL,
  `winnings_gold` DOUBLE NULL,
  PRIMARY KEY (`Fighter_fighter_id`, `Battle_battle_id`),
  INDEX `fk_Fighter_has_Battle_Battle1_idx` (`Battle_battle_id` ASC) VISIBLE,
  INDEX `fk_Fighter_has_Battle_Fighter1_idx` (`Fighter_fighter_id` ASC) VISIBLE,
  CONSTRAINT `fk_Fighter_has_Battle_Fighter1`
    FOREIGN KEY (`Fighter_fighter_id`)
    REFERENCES `crixus`.`Fighter` (`fighter_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Fighter_has_Battle_Battle1`
    FOREIGN KEY (`Battle_battle_id`)
    REFERENCES `crixus`.`Battle` (`battle_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;



-- initialize the team table
INSERT INTO team(team_id, team_label)
VALUES (23, "The Big Lads"),
       (39, "The Sons of Zeus"),
       (35, "Hercules Wrath");

-- initialize user table
INSERT INTO user(user_id, first_name, last_name, password, email, birth_date, wallet_gold, username, Team_team_id)
VALUES (1, "kenneth", "barclay", "12345", "kdb.worker.bee@gmail.com", "1997-06-02", 12, "fighter_lad123", 23),
	   (2, "gurkirat", "singh", "password", "gsingh0982@conestogac.on.ca", "2004-01-01", 10000, "big_fighter22", 39),
       (3, "alex", "sturgeon", "bigPassword", "asturgeonspragu5009@conestogac.on.ca", "1997-01-01", 5000, "strong_lad97", 35);

-- initialize weapon table
INSERT INTO weapon(weapon_id, name, appearance, damage, type, price, rarity)
VALUES (1, "The Blood Dagger", "Small blade with red stripes running down the sides", 20, "Blade", 500, 6),
	   (2, "Jason's Spear", "Spear once owned by gladiator champion Jason Dor Ulo", 15, "Spear", 300, 4);

-- initialize armour table
INSERT INTO armour(armour_id, name, appearance, damage_protection, type, price, rarity)
VALUES (1, "Helmet of Rome", "Roman legionaire helmet", 10, "helmet", 200, 2),
       (2, "Obsidian Shield of the Forgotten", "Some say this massive shield could stop even the mightiest warrior", 25, "shield", 1000, 10);

-- initialize the fighter table
INSERT INTO fighter(fighter_id, first_name, last_name, appearance, strength, dexterity, constitution, intelligence, salary, Weapons_weapon_id, Armour_armour_id, User_user_id, Team_team_id)
VALUES (1, "Marcus", "Gia", "hulking behemoth towering over any other", 6, 4, 2, 1, 400, 1, 2, 1, 23),
       (2, "Julius", "Cesear", "legendary empoeror known for his strategic and leadership capabilities", 2, 4, 3, 6, 1000, 2, 2, 2, 39),
       (3, "Lucius", "Marcellus", "quick fingered thief, sentenced to death, who's survived in the arena longer than anyone expected", 3, 6, 4, 2, 600, 2, 1, 3, 35),
       (4, "Gaius", "The Unsaitable", "capable of devouring a full cow at 10, his strength and bloodlust is unmatched", 10, 1, 1, 1, 800, 2, 2, 2, 39);

-- initialize the battle table
INSERT INTO battle(battle_id, battle_date)
VALUES (1, "2026-05-23"),
       (2, "2026-05-24"),
       (3, "2025-10-12"),
       (4, "2025-10-08"),
       (5, "2026-06-02"),
       (6, "2024-09-09"),
       (7, "2026-02-23");

-- initialize team_has_battle table
INSERT INTO team_has_battle(Team_team_id, Battle_battle_id, result, winnings_gold)
VALUES (23, 1, 0, 0),
       (39, 1, 1, 100),
       (35, 2, 0, 0), 
       (39, 2, 1, 200),
       (23, 3, 0, 0),
       (35, 3, 1, 250),
       (23, 4, 1, 200),
       (39, 4, 0, 0);

-- initialize fighter_has_battle table
INSERT INTO fighter_has_battle(Fighter_fighter_id, Battle_battle_id, result, winnings_gold)
VALUES (1, 5, 0, 0),
       (2, 5, 1, 100),
       (3, 6, 1, 100),
       (2, 6, 0, 0),
       (1, 7, 0, 0),
       (1, 7, 1, 100);







