// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)// year-month-date
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) YY-MM-DD HH-MM
// let myCreatedDate = new Date("2023-01-14") YY-MM-DD
let myCreatedDate = new Date("01-14-2023")  // MM-DD-YY
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()// return millisec  tak 1 jan 1970 se abhi tak ka 

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));// return sec abhi tak ka 1 jan 1970 se lekar

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
