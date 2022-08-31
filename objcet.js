// ocjcet can contains/involved two type data like property, and methods like function

//1. must know creat object using object literels
const player = {};

player.name = 'ahsan habib';
player.age = '56';
player.speciality = 'batsman';

player.bat = function () {
    console.log('right handed hard heater')
}

player.bowl = function () {
    console.log('fast and medium bowler')
}
// console.log(player)

player.bat();
player.bowl();


// 2. Es6 class

class person  {
    name= 'abul'
    adress = 'dhaka';
    constructor(age) {
        this.age = age
    }
}

const person1 = new person(56)
console.log(person1)

class footballer {
    name = 'miraz';
    position = 'midfilder';
    
    constructor(center) {
        this.position = center;
    }

}
const newFootbller = new footballer('striker');
console.log(newFootbller);