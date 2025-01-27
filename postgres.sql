-- Create Database
CREATE DATABASE trade_portal;

-- Use the Database
USE trade_portal;

-- Create Users Table
CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('trader', 'admin', 'viewer') NOT NULL DEFAULT 'trader'
);

-- Create Countries Table
CREATE TABLE Countries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    code VARCHAR(10) NOT NULL UNIQUE
);

-- Create Stakeholders Table
CREATE TABLE Stakeholders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    country_id INT NOT NULL,
    sector VARCHAR(255),
    FOREIGN KEY (country_id) REFERENCES Countries(id) ON DELETE CASCADE
);

-- Create Regulations Table
CREATE TABLE Regulations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    stakeholder_id INT NOT NULL,
    FOREIGN KEY (stakeholder_id) REFERENCES Stakeholders(id) ON DELETE CASCADE
);

-- Create Products Table
CREATE TABLE Products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    hs_code VARCHAR(50) NOT NULL,
    classification INT,
    chapter INT,
    image_url VARCHAR(255),
    trader_id INT NOT NULL,
    FOREIGN KEY (trader_id) REFERENCES Users(id) ON DELETE CASCADE
);

-- Create CustomDeclarations Table
CREATE TABLE CustomDeclarations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    trader_id INT NOT NULL,
    product_id INT NOT NULL,
    entry_point_id INT NOT NULL,
    departure_date DATE NOT NULL,
    arrival_date DATE NOT NULL,
    FOREIGN KEY (trader_id) REFERENCES Users(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES Products(id) ON DELETE CASCADE
);

-- Create EmailTemplates Table
CREATE TABLE EmailTemplates (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    body TEXT NOT NULL
);

-- Insert Sample Users
INSERT INTO "Users" (name, email, password, role, "createdAt", "updatedAt")
VALUES ('John Doe', 'john@example.com', '1111', 'trader', NOW(), NOW()),
       ('Alice Smith', 'alice@example.com', '1111', 'admin', NOW(), NOW()),
       ('Bob Viewer', 'bob@example.com', '1111', 'viewer', NOW(), NOW());

-- Insert Sample Countries
INSERT INTO "Countries" (name, code, "createdAt", "updatedAt")
VALUES ('United States', 'US', NOW(), NOW());

-- Insert Sample Stakeholders
INSERT INTO "Stakeholders" (name, country_id, sector, "createdAt", "updatedAt")
VALUES ('Trade Authority', 1, 'Trade Regulation', NOW(), NOW());

-- Insert Sample Email Templates
INSERT INTO "EmailTemplates" (name, subject, body, "createdAt", "updatedAt")
VALUES (
    'welcome_email',
    'Welcome to Trade Portal!',
    '<h1>Hello {{name}}, welcome to Trade Portal!</h1>',
    NOW(),
    NOW()
);
