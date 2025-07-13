const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10}) 

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);



const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10





const object1 = [
    {
        price : 90
    },
    {
        price : 80

    }
]

const total = object1.reduce((acc , item) => acc+item.price , 0);   

const total1 = object1.reduce(function (acc , item){
    return acc + item.price 
} , 0) 

console.log(total1);
