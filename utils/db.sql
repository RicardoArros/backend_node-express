CREATE DATABASE IF NOT EXISTS micocina;

--
USE  micocina;

--
CREATE TABLE Recipes (
  id INT(11) NOT NULL AUTO_INCREMENT,
  title VARCHAR(50) NOT NULL,
  description VARCHAR(255) NOT NULL,
  category VARCHAR(25) NOT NULL,
  country VARCHAR(25) NOT NULL,
  season VARCHAR(25) NOT NULL,
  ingredients_qty INT NOT NULL,
  instructions_qty INT NOT NULL,
  preparation_time VARCHAR(25) NOT NULL,

  FOREIGN KEY (ingredients_id) REFERENCES Ingredients(id),

  PRIMARY KEY (id)
)

DESCRIBE recipes;

--
CREATE TABLE Ingredients (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  category VARCHAR(25) NOT NULL,
)

