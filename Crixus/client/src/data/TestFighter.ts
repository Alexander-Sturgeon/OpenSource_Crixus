import Fighter from "../data/Fighter";
  import Weapon from "../data/Weapon";
  import Armour from "../data/Armour";
  import User from "../data/User";
  import Team from "../data/Team";

  const testWeapon = new Weapon(1, 42, "Spear", "A bronze-tipped spear worn from battle", "Gaius's Lance", 350, 3);

  const testArmour = new Armour(1, "Legionnaire Shield", "A dented round shield bearing a faded eagle", 30, "Shield",
  220, 2);

  const testUser = new User(1, "Alexander", "Sturgeon", "hunter2", new Date("1999-04-12"), 1500, "alex_gladiator", 1);

  const testTeam = new Team(1, "Crimson Legion");

  const testFighter = new Fighter(
    1,
    "Maximus",
    "Decimus",
    "/fighters/Fighter.png",
    88,   // strength
    64,   // intelligence
    77,   // dexterity
    81,   // constitution
    2400, // salary
    testWeapon,
    testArmour,
    testUser,
    testTeam
  );

  export default testFighter;