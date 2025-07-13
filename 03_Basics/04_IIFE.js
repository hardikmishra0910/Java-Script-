// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // ; we need to provide if we are written two IIFE function otherwise it will show error  ,  ()() -> IIFE

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
