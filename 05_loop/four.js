const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) { // for object you can use the for in loop
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

const myObjec = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programmin = ["js", "rb", "py", "java", "cpp"]

for (const key in programmin) {
    //console.log(programming[key]);
}

const map = new Map() // key is always unqiue 
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('ar', "France")
map.set('IN', "Indi") // update the current key value in IN 

for (const key in map) {
    console.log(key); // don't print anything for map use for of loop
}
for ( const [key , value] of map){  // for of loop is use 
    console.log(`${key}  shortcut ${value}`);
    
}