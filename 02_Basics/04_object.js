// const tinderUser = new Object() // create object using consutator return empty {} -> invoke singleton 
const tinderUser = {} // cretd object using liteal return {}  -> not invoke singleton

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {// nested object
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);// acces nested object

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } // new object where { obj1 : { 1: a ...} , obje2 : {3:a}} // where obj1 and obj2 act as key 
// const obj3 = Object.assign({}, obj1, obj2, obj4) // assign method return { 1 : "a" , 2 : b , 3:"a" ...} combine all object store into new object3 me but you need to pass {} otherwise it will store into obj1 as well obj3

const obj3 = {...obj1, ...obj2} // best method spred opertor to combine all object 
// console.log(obj3);


const users = [// array as object
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email// acces object inside array
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // return all keys in array format
// console.log(Object.values(tinderUser)); // return all values in array format
// console.log(Object.entries(tinderUser)); // return all key, values pair as neste array format [['id',123],['name':"happy"]]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));// to check whether the isloggedin keys is present inside object or not return boolean value


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course// object destructing 

// console.log(courseInstructor);
console.log(instructor);

// JSON format NO variable API ko JSON format me data milega phele xml me mil ta tha fir api user request ke according fetch kar lega data ko json me se
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }


// array format me bhi milta hai data api ko backend se 
[
    {},
    {},
    {}
]
