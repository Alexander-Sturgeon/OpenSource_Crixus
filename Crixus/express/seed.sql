-- initialize the team table
INSERT INTO team(team_id, team_label)
VALUES (23, "The Big Lads"),
       (39, "The Sons of Zeus"),
       (35, "Hercules Wrath");

-- initialize user table
INSERT INTO user(user_id, first_name, last_name, password, email, birth_date, wallet_gold, username, Team_team_id)
VALUES (1, "kenneth", "barclay", "12345", "kdb.worker.bee@gmail.com", "1997-06-02", 12, "fighter_lad123", 23),
	   (2, "gurkirat", "singh", "password", "gsingh0982@conestogac.on.ca", "2004-01-01", 10000, "big_fighter22", 39),
       (3, "alex", "sturgeon", "bigPassword", "asturgeonspragu5009@conestogac.on.ca", "1997-01-01", 5000, "strong_lad97", 35);

-- initialize weapon table
INSERT INTO weapon(weapon_id, name, appearance, damage, type, price, rarity)
VALUES (1, "The Blood Dagger", "/weapon/swordOne.png", 20, "Blade", 500, 2),
	   (2, "Jason's Spear", "/weapon/spearOne.png", 15, "Spear", 300, 3);

-- initialize armour table
INSERT INTO armour(armour_id, name, appearance, damage_protection, type, price, rarity)
VALUES (1, "Helmet of Rome", "/armor/helmetOne.png", 10, "helmet", 200, 2),
       (2, "Obsidian Shield of the Forgotten", "/armor/shieldOne.png", 25, "shield", 1000, 1);

-- initialize the fighter table
INSERT INTO fighter(fighter_id, first_name, last_name, appearance, strength, dexterity, constitution, intelligence, salary, Weapons_weapon_id, Armour_armour_id, User_user_id, Team_team_id)
VALUES (1, "Marcus", "Gia", "hulking behemoth towering over any other", 6, 4, 2, 1, 400, 1, 2, 1, 23),
       (2, "Julius", "Cesear", "legendary empoeror known for his strategic and leadership capabilities", 2, 4, 3, 6, 1000, 2, 2, 2, 39),
       (3, "Lucius", "Marcellus", "quick fingered thief, sentenced to death, who's survived in the arena longer than anyone expected", 3, 6, 4, 2, 600, 2, 1, 3, 35),
       (4, "Gaius", "The Unsaitable", "capable of devouring a full cow at 10, his strength and bloodlust is unmatched", 10, 1, 1, 1, 800, 2, 2, 2, 39);

-- initialize the battle table
INSERT INTO battle(battle_id, battle_date)
VALUES (1, "2026-05-23"),
       (2, "2026-05-24"),
       (3, "2025-10-12"),
       (4, "2025-10-08"),
       (5, "2026-06-02"),
       (6, "2024-09-09"),
       (7, "2026-02-23");

-- initialize team_has_battle table
INSERT INTO team_has_battle(Team_team_id, Battle_battle_id, result, winnings_gold)
VALUES (23, 1, 0, 0),
       (39, 1, 1, 100),
       (35, 2, 0, 0), 
       (39, 2, 1, 200),
       (23, 3, 0, 0),
       (35, 3, 1, 250),
       (23, 4, 1, 200),
       (39, 4, 0, 0);

-- initialize fighter_has_battle table
INSERT INTO fighter_has_battle(Fighter_fighter_id, Battle_battle_id, result, winnings_gold)
VALUES (1, 5, 0, 0),
       (2, 5, 1, 100),
       (3, 6, 1, 100),
       (2, 6, 0, 0),
       (1, 7, 0, 0),
       (2, 7, 1, 100);