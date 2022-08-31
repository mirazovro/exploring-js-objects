const laptop = { name: 'asus', ram: '4 Gb', isCmaera: true, color: 'gray' }

const keys = Object.keys(laptop)
// console.log(keys);
const values = Object.values(laptop);
// console.log(values);

const pair = Object.entries(laptop);
// console.log(pair)

// const twoDimension = [
//     [ 'name', 'asus' ],
//     [ 'ram', '4 Gb' ],
//     [ 'isCmaera', true ],
//     [ 'color', 'gray' ]
//   ]

console.log(laptop)
// Object.seal(laptop)
// Object.freeze(laptop)
delete laptop.name;
laptop.ram = '15gb';
laptop.price = 1520000;
laptop.color = 'white';
console.log(laptop)
delete laptop.ram;
console.log(laptop)
