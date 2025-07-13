const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){ // for each loop is very imp inside for each just pass the functioncallback with NO name of function and its parameter
//     console.log(val); // js ruby ...
// } )

// coding.forEach( (item) => { // using arrow function
//     console.log(item);
// } )

function printMe(item){
    console.log(item);
}

// coding.forEach(printMe()) // it will give us error with ()
// coding.forEach(printMe) // it will give us result js ruby ... without the () 

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr); // it will print all value with index aith all arr o/p -> js 0 [js ruby java ... ]
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

// myCoding.forEach( (item) => { //a rray ke ander obejc ho tho foreach loop laga do
    
//     console.log(item.languageName);
// } )