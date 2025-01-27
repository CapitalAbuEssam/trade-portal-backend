#!/bin/bash

# Test Backend Endpoint
curl -X GET http://localhost:5001/

# Register Users
curl -X POST http://localhost:5001/api/auth/register \
-H "Content-Type: application/json" \
-d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "role": "trader"
}'

curl -X POST http://localhost:5001/api/auth/register \
-H "Content-Type: application/json" \
-d '{
    "name": "Alice Smith",
    "email": "alice@example.com",
    "password": "password123",
    "role": "admin"
}'

# Login
curl -X POST http://localhost:5001/api/auth/login \
-H "Content-Type: application/json" \
-d '{
    "email": "john@example.com",
    "password": "password123"
}'

curl -X POST http://localhost:5001/api/auth/login \
-H "Content-Type: application/json" \
-d '{
    "email": "alice@example.com",
    "password": "password123"
}'

# Insert Regulation
curl -X POST http://localhost:5001/api/regulations \
-H "Content-Type: application/json" \
-d '{
    "title": "Trade Regulation 101",
    "description": "This regulation covers international trade.",
    "stakeholder_id": 1
}'

# Fetch All Regulations
curl -X GET http://localhost:5001/api/regulations

# Update Email Template
curl -X PUT http://localhost:5001/api/emailTemplates/1 \
-H "Content-Type: application/json" \
-d '{
    "subject": "Updated Welcome Email",
    "body": "<h1>Hi {{name}}, enjoy Trade Portal!</h1>"
}'

# Fetch Email Template
curl -X GET http://localhost:5001/api/emailTemplates/welcome_email


# Register Users
curl -X POST http://localhost:5001/api/auth/register \
-H "Content-Type: application/json" \
-d '{
    "name": "John Doe",
    "email": "testingpurposes796@gmail.com",
    "password": "12345River$ea",
    "role": "trader"
}'


curl -X GET http://localhost:5001/api/admin/users \
-H "Content-Type: application/json" \
-H "Authorization: Bearer "