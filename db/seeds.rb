# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

conditions = Condition.create!([
  {
    "name": "Blinded",
    "description": "A blinded creature can't see and automatically fails any ability check that requires sight.\n Attack rolls against the creature have advantage. and the creature's atlack ralls have disadvantage.",
    "page": "PHB 290"
  },{
    "name": "Charmed",
    "description": "A charmed creature can't attack the charmer or target the charmer with harmful abilities or magical effects.\n The charmer has advantage on any ability check to interact socially with the creature.",
    "page": "PHB 290"
  },{
    "name": "Deafened",
    "description": "A deafened creature can't hear and automatically fails
    any ability check that requires hearing.",
    "page": "PHB 290"
  },{
    "name": "Frightened",
    "description": "A frightened creature has disadvantage on ability checks and attack rolls while the source of its fear is within line of sight.\n The creature can't willingly move closer to the source of its fear.",
    "page": "PHB 290"
  },{
    "name": "Grappled",
    "description": "A grappled creature's speed becomes O,and it can't benefit from any bonus to its speed.\n  The condition ends if the grappler is incapacitated (see the condition).\n The condition also ends if an effect removes the grappled creature fram the reach of the grappler or grappling effect, such as when a creature is hurled away by the Thunderwave spell.",
    "page": "PHB 290"
  },{
    "name": "Incapacitated",
    "description": "An incapacitated creature can't take actions or reactions.",
    "page": "PHB 290"
  },{
    "name": "Invisible",
    "description": "An invisible creature is impossible to see without the aid of magic or a special sense. For the purpose of hiding, the creature is heavily obscured. The creature's location can be detected by any noise it makes or any tracks it leaves.\n Attack rolls against the creature have disadvantage, and the creature's attack rolls have advantage.",
    "page": "PHB 291"
  },{
    "name": "Paralyzed",
    "description": "A paralyzed creature is Incapacitated (see the condition) and can't move or speak.\n The creature automatically fails Strength and Dexterity saving throws.\n Attack rolls against the creature have advantage.\n Any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.",
    "page": "PHB 291"
  },{
    "name": "Petrified",
    "description": "A petrified creature is transformed, along with any nonmagical object it is wearing or carrying, into a solid inanimate substance (usually stone). Its weight increases by a factor of ten, and it ceases aging.\n The creature is Incapacitated (see the condition), can't move or speak, and is unaware of its surroundings.\n Attack rolls against the creature have advantage.\n The creature automatically fails Strength and Dexterity saving throws.\n The creature has resistance to all damage.\n The creature is immune to poison and disease, although a poison or disease already in its system is suspended, not neutralized.",
    "page": "PHB 291"
  },{
    "name": "Poisoned",
    "description": "A poisoned creature has disadvantage on attack rolls and ability checks.",
    "page": "PHB 292"
  },{
    "name": "Prone",
    "description": "A prone creature's only movement option is to crawl, unless it stands up and thereby ends the condition.\n The creature has disadvantage on attack rolls.\n An attack roll against the creature has advantage if the attacker is within 5 feet of the creature. Otherwise, the attack roll has disadvantage.",
    "page": "PHB 292"
  },{
    "name": "Restrained",
    "description": "A restrained creature's speed becomes 0, and it can't benefit from any bonus to its speed.\n Attack rolls against the creature have advantage,
    and the creature's attack rolls have disadvantage.\n The creature has disadvantage on Dexterity saving throws.",
    "page": "PHB 292"
  },{
    "name": "Stunned",
    "description": "A stunned creature is Incapacitated (see the condition), can't move, and can speak only falteringly.\n The creature automatically fails Strength and Dexterity saving throws.\n Attack rolls against the creature have advantage.",
    "page": "PHB 292"
  },{
    "name": "Unconscious",
    "description": "An unconscious creature is Incapacitated (see the condition), can't move or speak, and is unaware of its surroundings.\n The creature drops whatever it's holding and falls Prone.\n The creature automatically fails Strength and Dexterity saving throws.\n Attack rolls against the creature have advantage.\n Any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.",
    "page": "PHB 292"
  }
])

user = User.create!({
  "username": "mattMercer",
  "email": "matt@critrole.com",
  "password": "123456",
  "image": "https://upload.wikimedia.org/wikipedia/commons/2/27/Matthew_Mercer_by_Gage_Skidmore.jpg"
})

rest = Rest.create!([
  {
    "name": "Short Rest",
    "description": "A short rest is a period of downtime, at least 1 hour long, during which a character does nothing more strenuous than eating, drinking, reading, and tending to wounds. \n A character can spend one or more Hit Dice at the end of a short rest, up to the character's maximum number of Hit Dice, which is equal to the character's level. For each Hit Die spent in this way, the player rolls the die and adds the character's Constitution modifier to it. The character regains hit points equal to the total. The player can decide to spend an additional Hit Die after each roll. A character regains some spent Hit Dice upon finishing a long rest, as explained below.",
    "page": "PHB 168"
  },{
    "name": "Long Rest",
    "description": "A long rest is a period of extended downtime, at least 8 hours long, during which a character sleeps or performs light activity: reading, talking, eating, or standing watch for no more than 2 hours. If the rest is interrupted by a period of strenuous activity---at least 1 hour of walking, fighting, casting spells, or similar adventuring activity---the characters must begin the rest again to gain any benefit from it. \n At the end of a long rest, a character regains all lost hit points. The character also regains spent Hit Dice, up to a number of dice equal to half of the character's total number of them (minimum of one die). For example, if a character has eight Hit Dice, he or she can regain four spent Hit Dice upon finishing a long rest. \n A character can't benefit from more than one long rest in a 24-hour period, and a character must have at least 1 hit point at the start of the rest to gain its benefits.",
    "page": "PHB 168"
  }
])

p "#{Condition.count} conditions created!"
p "#{User.count} users created!"
p "#{Rest.count} rests created!"