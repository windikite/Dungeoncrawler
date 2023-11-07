
//declare dungeon, monster, player objects
//create arrays for various monsters and dungeons
//create functions for loading the dungeon, monsters and players
//create vars/states for indungeon, incombat, levels, stats
//make an onstart sequence that loads a default dungeon and populates it

const game = {
    dungeons: [],
    players: [],
    enemies: [],
    createEntity:  function(name, hp, atk, arriveText, greeting, isPlayer){
        let newEntity = new entity(name, hp, atk, arriveText, greeting, isPlayer);
        if (isPlayer === true) {
            this.players.push(newEntity);
        }else if (isPlayer === false) {
            this.enemies.push(newEntity);
        }else {
            console.log('Entity is neither player nor enemy.')
        }
        console.log(newEntity.arrive());
        
    },
    createDungeon:  function(name, description, enemies){
        let newDungeon = new entity(name, description, enemies);
        this.dungeons.push(newDungeon);
        console.log(newDungeon.description);
        
    }
}

class entity{
    constructor(name, hp, atk, arriveText, greeting, isPlayer){
        this.name = name;
        this.hp = hp;
        this.atk = atk;
        this.arriveText = arriveText;
        this.greeting = greeting;
        this.isPlayer = isPlayer;
    }
    arrive = function(){
        console.log(`${this.arriveText}`);
        console.log(`${this.name}: "${this.greeting}"`);
        return
    }
    attack = function(target){
        target.hp = target.hp - this.atk;
        console.log(`${this.name} attacked the ${target.name} for ${this.atk} damage! The ${target.name}'s HP is now ${target.hp}.`);
    }
    castSpell = function(){
        const enemies = game.enemies;
        console.log(...enemies);
        Array.from(enemies).forEach(function (enemy) {
            enemy.hp = enemy.hp - 1;
            console.log(enemies.hp);
        });
        
    }
}

class dungeon{
    constructor(name, description, enemies){
        this.name = name;
        this.description = description;
        this.enemies = enemies;
    }
}

game.createDungeon('Ruins', `It's ruined.`, game.enemies);
game.createDungeon('Catacombs', `Spooky!`, game.enemies);
game.createEntity('Rayne', 10, 2, 'Rayne has joined the fray!', 'Pi!', true);
game.createEntity('Wynn', 1, 13, 'AHHHHHH', 'AHHHHHHHHHHHHHHHHHHHH', true);
game.createEntity('Jon', 12, 1, 'Jon 2 is ready for battle!', 'Fuck you', true);
game.createEntity('Slime', 4, 1, 'A slime has appeared!', 'Hewwo!', false);
game.createEntity('Skeleton', 3, 2, 'A skeleton has crawled out of the ground!', 'Get boned!', false);
console.log(game.dungeons);





//combat
//create attack function and turn states
//field positions
//make attack function properly affect stats
//monster and player death
//loot gain
//saving character progress

//manipulating the dom and rendering
//change the background to the right dungeon and place player images
//automatic scaling of sprites based on party count
//animations

//creating a character?
//deleting a character
//selecting party comp