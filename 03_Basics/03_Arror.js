const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); // this refer to current context aur current object
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage() 

// console.log(this);// {} value it will give  but if you run this statement in window brower console it will show window object 

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // it will give undefine value 
// } // this can only use in object we can't implent in function

// chai()  // it will undedined value because of this 

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); 
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this); // it will give {}
}


// chai() // it will print {} value  case of arrow function also

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 // don't need to write return

// const addTwo = (num1, num2) => ( num1 + num2 ) // use parthense no need to write return 

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()