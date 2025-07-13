// singleton
// Object.create // isme singleton create hoga --> baad me



// object literals // isme singleton creted nhi hota hai
const mySym = Symbol("key1") // add symbol dataype in object 


const JsUser = {// object literal creation
    name: "Hitesh",
    "full name": "Hitesh Choudhary",// key always as unique and value can be differnt and key always considers as string 
    [mySym]: "mykey1",// use [] square bracket to add symbol as key 
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)// can't change any thing in object
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){// add funtion as value and key as greeting in object 
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);// this is take reference of object 
}

console.log(JsUser.greeting()); 
console.log(JsUser.greetingTwo());
console.log(JsUser) 