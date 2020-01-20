1. You should add valid API_KEY to every customer on './src/domain/customers.js'

2. Scripts:

yarn install

yarn run lint
yarn run test

node start --customerName='Sunrise Bank' --longitude=-97.7352479 --latitude=30.4886951

# Coding Challenge
## Requirements
1) Return project within 72 hours of receipt, even if incomplete
2) Send project via email in a zipped folder, or send link to git repo
## Resources:
https://developers.google.com/places/web-service/search
Reach out to team as needed with questions
## Tech Requirements:
1) Build a server-side application in NodeJS that utilizes Google's place search API: https://developers.google.com/places/web-service/search
2) Application should support requesting Google's API w/ params: latitude, longitude, number of locations,
   type (either bank or atm or all), response output type, and language, and return an
   array of locations.
3) Project should require input parameters: latitude, longitude, and customer name
4) API Key should be masked or part of config, not in params as clear text
5) Incorporate TDD or unit testing practices
6) ES6 support required
7) Data should not be hard coded within functions
8) Extra credit: Incorporate linting
## Customer Config Info:
Customer name: Sunrise Bank
API Key:  type: atm
language: English
response output: xml
number of nearby locations to request: 200
Customer name: Happy Credit Union
API Key:  type: bank
language: Spanish
response output: json
number of nearby locations to request: 20
Customer name: Paris FCU
API Key: 
 type: all
language: French
response output: json
number of nearby locations to request: 5
