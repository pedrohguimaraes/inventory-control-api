-- MySQL Script generated by MySQL Workbench
-- Fri Apr 19 19:14:30 2019
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema inventory
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema inventory
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `inventory` DEFAULT CHARACTER SET utf8 ;
USE `inventory` ;

-- -----------------------------------------------------
-- Table `inventory`.`fabricator`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `inventory`.`fabricator` (
  `id` INT NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `address` TEXT NULL,
  `identification` VARCHAR(30) NULL,
  `contact` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `inventory`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `inventory`.`product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fabricator_id` INT NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `registration_date` TIMESTAMP NOT NULL,
  `description` TEXT NULL,
  `width` DOUBLE NULL,
  `height` DOUBLE NULL,
  `lenght` DOUBLE NULL,
  `taxation` DOUBLE NULL,
  `gross_weight` DOUBLE NULL,
  `net_weight` DOUBLE NULL,
  `minimum_stock` INT(11) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_product_fabricator1_idx` (`fabricator_id` ASC),
  CONSTRAINT `fk_product_fabricator1`
    FOREIGN KEY (`fabricator_id`)
    REFERENCES `inventory`.`fabricator` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `inventory`.`branch`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `inventory`.`branch` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `is_active` TINYINT NOT NULL,
  `address` TEXT NULL,
  `state` VARCHAR(20) NULL,
  `country` VARCHAR(25) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `inventory`.`adress_inventory`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `inventory`.`adress_inventory` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `is_active` TINYINT NOT NULL,
  `branch_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_adress_inventory_branch_idx` (`branch_id` ASC) ,
  CONSTRAINT `fk_adress_inventory_branch`
    FOREIGN KEY (`branch_id`)
    REFERENCES `inventory`.`branch` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `inventory`.`item`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `inventory`.`item` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `barcode` VARCHAR(45) NOT NULL,
  `current_location` VARCHAR(45) NOT NULL,
  `external_id` VARCHAR(255) NULL,
  `product_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_item_product1_idx` (`product_id` ASC) ,
  CONSTRAINT `fk_item_product1`
    FOREIGN KEY (`product_id`)
    REFERENCES `inventory`.`product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `inventory`.`item_address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `inventory`.`item_address` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `adress_inventory_id` INT NOT NULL,
  `item_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_product_address_adress_inventory1_idx` (`adress_inventory_id` ASC) ,
  INDEX `fk_product_address_item1_idx` (`item_id` ASC) ,
  CONSTRAINT `fk_product_address_adress_inventory1`
    FOREIGN KEY (`adress_inventory_id`)
    REFERENCES `inventory`.`adress_inventory` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_address_item1`
    FOREIGN KEY (`item_id`)
    REFERENCES `inventory`.`item` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `inventory`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `inventory`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `is_active` TINYINT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `inventory`.`movement_type`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `inventory`.`movement_type` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `inventory`.`movement`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `inventory`.`movement` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` TIMESTAMP NOT NULL,
  `user_id` INT NOT NULL,
  `movement_type_id` INT NOT NULL,
  `address_origin_id` INT NOT NULL,
  `adress_destiny_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_movement_user1_idx` (`user_id` ASC) ,
  INDEX `fk_movement_movement_type1_idx` (`movement_type_id` ASC) ,
  INDEX `fk_movement_item_address1_idx` (`address_origin_id` ASC) ,
  INDEX `fk_movement_adress_inventory1_idx` (`adress_destiny_id` ASC) ,
  CONSTRAINT `fk_movement_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `inventory`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_movement_movement_type1`
    FOREIGN KEY (`movement_type_id`)
    REFERENCES `inventory`.`movement_type` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_movement_item_address1`
    FOREIGN KEY (`address_origin_id`)
    REFERENCES `inventory`.`item_address` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_movement_adress_inventory1`
    FOREIGN KEY (`adress_destiny_id`)
    REFERENCES `inventory`.`adress_inventory` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `inventory`.`item_branch`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `inventory`.`item_branch` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `net_price` DOUBLE NULL,
  `gross_price` DOUBLE NULL,
  `discount` VARCHAR(255) NULL,
  `cost_price` DOUBLE NULL,
  `branch_id` INT NOT NULL,
  `item_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_item_branch_branch1_idx` (`branch_id` ASC) ,
  INDEX `fk_item_branch_item1_idx` (`item_id` ASC) ,
  CONSTRAINT `fk_item_branch_branch1`
    FOREIGN KEY (`branch_id`)
    REFERENCES `inventory`.`branch` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_item_branch_item1`
    FOREIGN KEY (`item_id`)
    REFERENCES `inventory`.`item` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `inventory`.`item_requisition`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `inventory`.`item_requisition` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date_limit` TIMESTAMP NOT NULL,
  `product_id` INT NOT NULL,
  `adress_inventory_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_item_requisition_product1_idx` (`product_id` ASC) ,
  INDEX `fk_item_requisition_adress_inventory1_idx` (`adress_inventory_id` ASC) ,
  CONSTRAINT `fk_item_requisition_product1`
    FOREIGN KEY (`product_id`)
    REFERENCES `inventory`.`product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_item_requisition_adress_inventory1`
    FOREIGN KEY (`adress_inventory_id`)
    REFERENCES `inventory`.`adress_inventory` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
