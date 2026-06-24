# OpenSource_Group_One
Project for OpenSource Programming

## Project Title
Crixus Fight Organizer

## Group Members
Alex Sturgeon
Gurkirat Singh
Kenneth Barclay

## Description
Crixus is a fight organizer designed for medieval fight reenactments. This will allow for users to create a custom profile for their fighter(s), add/edit/delete fighters up to a max of 4. You can buy armor and weapons in the armory, with in app currency that can be equipped to your fighters. You can earn that in game currency by sending your fighters to the arena to have them duel in single combat or team combat. The arena combat has a winners bonus which will be determined based on the salary(s) of the fighter(s) you are putting in the arena.

## Tech Stack
Typescript - Express + Typescript
Postgres - MySQL
Potential React.js frontend implementation


## Setup Instructions
The following steps must be taken in order to ensure Crixus functions as intended.

**Client side**
1. Navigate to the /client folder.
2. In the terminal, run 'npm install' to ensure correct dependencies are loaded.

**Server side**
1. Navigate to the /express folder.
2. In the terminal, run 'npm install' to ensure correct dependencies are loaded.
3. Open MySQL Workbench and connect to a localhost server.
4. Navigate to file -> Open SQL Script.
5. Load the database.sql file located in /Crixus/express.
6. From the MySQL Workbench, run the loaded sql script.
7. Refresh "SCHEMAS" section to see newly created database. 
8. Navigate to Crixus/express/src/db.ts
9. In the pool, change the 'user' and 'password' fields to match the username and password for your MySQL connection. (Note: DO NOT change the database name from 'crixus').
10. Return to the MySQL workbench, in the crixus schema, and navigate to file -> Open SQL Script.
11. load the seed.sql file located in /Crixus/express.
12. From the crixus schema, run the seed.sql file. It's important that this seed file run in the crixus schema. 

**Testing the server-side and database**
In the current implementation, the client side and server side are not connected. Because of this, you cannot access the loaded seed data in the database from the front end. In order to access to run the server side and thus access the database information, you must complete the following steps. 

1. Navigate to Crixus/express
2. In the terminal, run 'npm run dev'
3. Access the server, which by default runs on port 3000
