#!/bin/bash

echo "Testing Root Endpoint..."
curl -X GET http://localhost:5001/
echo -e "\n"

echo "Testing User Registration..."
curl -X POST http://localhost:5001/api/auth/register \
-H "Content-Type: application/json" \
-d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "role": "trader"
}'
echo -e "\n"

echo "Testing User Login..."
curl -X POST http://localhost:5001/api/auth/login \
-H "Content-Type: application/json" \
-d '{
    "email": "john@example.com",
    "password": "password123"
}'
echo -e "\n"

echo "Testing Update Email Template..."
curl -X PUT http://localhost:5001/api/emailTemplates/1 \
-H "Content-Type: application/json" \
-d '{
    "subject": "Welcome to the Portal!",
    "body": "<h1>Hello {{name}}, welcome to Trade Portal!</h1>"
}'
echo -e "\n"

echo "Testing Fetch Email Template..."
curl -X GET http://localhost:5001/api/emailTemplates/welcome_email
echo -e "\n"

echo "Testing Create Regulation..."
curl -X POST http://localhost:5001/api/regulations \
-H "Content-Type: application/json" \
-d '{
    "title": "Trade Regulation 101",
    "description": "This is a test regulation.",
    "stakeholder_id": 1
}'
echo -e "\n"

echo "Testing Fetch All Regulations..."
curl -X GET http://localhost:5001/api/regulations
echo -e "\n"
