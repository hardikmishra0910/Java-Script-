// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {  // for each will don't return any thing 
//     //console.log(item);
//     return item
// } )

// console.log(values); // if we write retun in function it will show undenifed
// but if we wirite just consloge.log(item) it willl print all value at last it will give undenife

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => { // use filter to use return in function
//     return num > 4 //  wirte (conditon here only) simply return
// } )
console.log(newNums); // now it will priunt all value >4 return in array format 


// const newNums = []

// myNums.forEach( (num) => { // IN FOR EACH LOOP  you need write if conditon 
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums); // then it will give value >4 inarray foramt


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);