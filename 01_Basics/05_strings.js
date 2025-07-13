const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);// place holder bana sakte hai

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__); all the method persent inside proto type // output {} but if we see in broweser console it will show all method of string inside prototype


// console.log(gameName.length);
// console.log(gameName.toUpperCase()); // it cant change orginal value
console.log(gameName.charAt(2));// t ->o/p
console.log(gameName.indexOf('t'));// 2

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());// REMOVE ALL SPACE

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));