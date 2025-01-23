-- Insert into Countries
INSERT INTO "Countries" (name, code, "createdAt", "updatedAt")
VALUES ('United States', 'US', NOW(), NOW());

-- Insert into Stakeholders
INSERT INTO "Stakeholders" (name, country_id, sector, "createdAt", "updatedAt")
VALUES ('Trade Authority', 1, 'Trade Regulation', NOW(), NOW());

-- Insert into Users
INSERT INTO "Users" (name, email, password, role, "createdAt", "updatedAt")
VALUES ('John Doe', 'john@example.com', '1111', 'trader', NOW(), NOW()),
       ('Alice Smith', 'alice@example.com', '1111', 'admin', NOW(), NOW()),
       ('Bob Viewer', 'bob@example.com', '1111', 'viewer', NOW(), NOW());
       
-- Insert into EmailTemplates
INSERT INTO "EmailTemplates" (name, subject, body, "createdAt", "updatedAt")
VALUES (
    'welcome_email',
    'Welcome to Trade Portal!',
    '<h1>Hello {{name}}, welcome to Trade Portal!</h1>',
    NOW(),
    NOW()
);