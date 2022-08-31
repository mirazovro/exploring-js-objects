// const first = {a:2};
// const second = { a: 2 };
// const third = second;
// if (second === third) {
//     console.log('they are same')
// } else {
//     console.log('they are not same')
// }

// do not use this method to compare object or array

const first = {a:2,b:3, c:4};
const second = { a: 2,b:3, c: 4
};
const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);
console.log(firstString, secondString)
if (firstString === secondString) {
    console.log('this is same')
} else {
    console.log('this is not same')
}
