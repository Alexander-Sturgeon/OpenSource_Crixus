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
  `team_id` INT NOT NULL AUTO_INCREMENT,
  `team_label` VARCHAR(50) NULL,
  PRIMARY KEY (`team_id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `crixus`.`User` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
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
  `weapon_id` INT NOT NULL AUTO_INCREMENT,
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
  `armour_id` INT NOT NULL AUTO_INCREMENT,
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
  `fighter_id` INT NOT NULL AUTO_INCREMENT,
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
  `battle_id` INT NOT NULL AUTO_INCREMENT,
  `battle_date` DATE NULL,
  PRIMARY KEY (`battle_id`))
ENGINE = InnoDB;
       
-- -----------------------------------------------------
-- Table `mydb`.`Team_has_Battle`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `crixus`.`Team_has_Battle` (
  `Team_team_id` INT NOT NULL AUTO_INCREMENT,
  `Battle_battle_id` INT NOT NULL AUTO_INCREMENT,
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
  `Fighter_fighter_id` INT NOT NULL AUTO_INCREMENT,
  `Battle_battle_id` INT NOT NULL AUTO_INCREMENT,
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




