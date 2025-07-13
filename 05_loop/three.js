// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num); // 1,2,3,4,5
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`) 
}

// Maps

const map = new Map() // store the key and value pair 
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) { // using this [] bracket only 
    // console.log(key, ':-', value); // map can iterable like this 
}
for (const key of map) { // 
    console.log(key); // map can iterable like this show all key value pair in array format 
}


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value); // show error that my object is not iterabel like this
    
}