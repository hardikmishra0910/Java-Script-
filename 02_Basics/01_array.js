// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)// add elemnts in front
// myArr.shift() // remove elemnts from front

// console.log(myArr.includes(9));// boolen datatype
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()// it will us string value , string datatype

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)// print all value from 1-3(exlcude)index and Do not remove from orginal array

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)// print all value from 1 to 3(include ) and remove that splice part from 1-3 index from original array
console.log("C ", myArr);
console.log(myn2);