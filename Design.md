**Project Topic:** 
Crixus is a fight organizer designed for medieval fight reenactments. This will allow for users to create a custom profile for their fighter(s), add/edit/delete fighters up to a max of 4. You can buy armor and weapons in the armory, with in app currency that can be equipped to your fighters. You can earn that in game currency by sending your fighters to the arena to have them duel in single combat or team combat. The arena combat has a winners bonus which will be determined based on the salary(s) of the fighter(s) you are putting in the arena.


**Technology:**
Database: MySQL
We chose MySQL for a variety of reasons. A primary motivation was the built in ERD creation tools and how easily they can be turned into SQL queries. In addition to this, PostgreSQL, the database we were originally looking to implement, was a technology that we had already looked at in detail. For this project, we really wanted to utilize a new database solution. MySQL is also known for its speed and simplicity. This will allow us to implement features efficiently, while allowing for future expansion should new features be designed. 
Frontend: ReactJS
Backend: Express TS + Typescript

Student 1 (Kenneth Barclay)
Database Design:

*Table 1-*
	Name: Users
	Purpose: Tracks basic user data, including in-game wallet and login details. 
	Fields: user_id, first_name, last_name, password, email, birth_date, wallet_gold, username
	Data Types: INT, VARCHAR, DATE, DOUBLE
	Relationships: One to Many with fighters, as a single user manages multiple fighters. 

*Table 2-*
	Name: Fighter
	Purpose: Logs fighter details, including current weapon and armour ids, general skills, and cost.
	Fields: fighter_id, first_name, last_name, appearance, strength, dexterity, constitution, intelligence, salary, Weapons_weapon_id, Armour_armour_id, users_users_id
	Data Types: INT, VARCHAR, DOUBLE
	Relationships: Many to One with weapons, as multiple fighters can have the same weapon type. Many to One with armour, as multiple fighters can have the same armour type. One to Many with Fighter_has_Battle conjunction table, as a fighter can have many battles. 

*Table 3-*
	Name: Weapon
	Purpose: Stores weapon details, including their cost, damage and other stats.
	Fields: weapon_id, name, appearance, damage, type, price, rarity
	Data Types: INT, VARCHAR, DOUBLE
	Relationships: One to Many with Fighter, as many fighters can have the same weapon type.

*Table 4-*
	Name: Armour
	Purpose: Stores armour details, including damage protection, cost, and other stats.
	Fields: armour_id, name, appearance, damage_protection, type, price, rarity
	Data Types: INT, VARCHAR, DOUBLE
	Relationships:

*Table 5-*
	Name: Battle
	Purpose: Logs individual battle details for user analysis and statistics.
	Fields: battle_id, winner, loser, winnings_gold, battle_date
	Data Types: INT, VARCHAR, DOUBLE, DATE
	Relationships: One to Many relationship with Fighter_has_Battle, as a battle can have many fighters.

*Table 6-*
	Name: Fighters_has_Battle
	Purpose: Conjunction table linking the Fighter table to the Battle table, resolving the Many to Many relationship between them. 
	Fields: Fighter_fighter_id, Battle_battle_id.
	Data Types: INT
	Relationships: Many to One relationship with Fighter and Battle. 

