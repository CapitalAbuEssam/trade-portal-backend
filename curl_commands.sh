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
    "firstName": "Amany",
    "lastName": "Badr",
    "email": "amanyalaanak@gmail.com",
    "phone": "01225767411",
    "companyName": "storakeg",
    "companySector": "Programmer",
    "password": "securepassword123",
    "role": "trader"
}'

curl -X POST http://localhost:5001/api/auth/register \
-H "Content-Type: application/json" \
-d '{
    "firstName": "Muhammad",
    "lastName": "Essam",
    "email": "example@gmail.com",
    "phone": "01225767411",
    "companyName": "example",
    "companySector": "example",
    "password": "securepassword101",
    "role": "admin"
}'

curl -X POST http://localhost:5001/api/auth/register \
-H "Content-Type: application/json" \
-d '{
    "firstName": "Deleted User",
    "lastName": "I am still here",
    "email": "delete@gmail.com",
    "phone": "01225767411",
    "companyName": "delete",
    "companySector": "delete",
    "password": "delete",
    "role": "trader"
}'

# Login
curl -X POST http://localhost:5001/api/auth/login \
-H "Content-Type: application/json" \
-d '{
    "email": "example@gmail.com",
    "password": "securepassword101"
}'

curl -X POST http://localhost:5001/api/auth/login \
-H "Content-Type: application/json" \
-d '{
    "email": "delete@gmail.com",
    "password": "delete"
}'

curl -X POST http://localhost:5001/api/auth/login \
-H "Content-Type: application/json" \
-d '{
    "email": "amanyalaanak@gmail.com",
    "password": "securepassword123"
}'

# make the admin list everybody
curl -X GET http://localhost:5001/api/admin/users \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <your_admin_token>"

# admin delete actions
curl -X DELETE http://localhost:5001/api/admin/users/3 \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <your_admin_token>"


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