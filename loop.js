// for of loop
const numbers = [25, 45, 65, 75];
for (const number of numbers) {
    // console.log(number)
}

const data = ['rafic', 'karim', 'jabbar', 'harun']
for (const da of data) {
//     console.log(da)
     
}

// for of cannot be used in object
const laptop = { name: 'asus', ram: '4 Gb', isCmaera: true, color: 'gray' }

// first option is loop through an object
// const keys = Object.keys(laptop);
// // console.log(keys)

/* 3 ways to read object property
1. laptop.color
2. laptop['color']
3. laptop[key]

*/

// for (const key of keys) {
//     // console.log(key,laptop[key])
// }

// kuno object ke iterate korte na parle seikhane amra for in loop use kore iterate krote pari
// for in loop

for (const key in laptop) {
    const value = laptop[key];
    console.log(key,value )
}

//my practice

const friends = {
    name: 'biplob',
    age: 54,
    city: 'dhaka',
    height: 5.5
    
}

for (const key in friends) {
    const value1 = friends[key]
    console.log(key,value1);
}