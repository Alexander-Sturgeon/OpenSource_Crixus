import Fighter from "./Fighter";
  import Weapon from "./Weapon";
  import Armour from "./Armour";
  import User from "./User";
  import Team from "./Team";

  const testWeapon = new Weapon(1, 42, "Spear", "/weapons/spearOne.png", "Pointy Spear", 350, 3);

  const testArmour = new Armour(1, "Legionnaire Shield", "/armor/shieldOne.png", 30, "Shield", 220, 1);

  const testUser = new User(1, "Alexander", "Sturgeon", "hunter2", new Date("1999-04-12"), 1500, "alex_gladiator", 1);

  const testTeam = new Team(1, "Crimson Legion");

  const testFighter = new Fighter(
    2,
    "Kenneth",
    "Barclaius",
    "/fighters/Fighter2.png",
    88,   // strength
    64,   // intelligence
    77,   // dexterity
    81,   // constitution
    1800, // salary
    testWeapon,
    testArmour,
    testUser,
    testTeam
  );

  export default testFighter;