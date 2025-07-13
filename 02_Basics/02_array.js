const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)// add array as dataype in marvel heros array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);// it will give all value in both the array 

const all_new_heros = [...marvel_heros, ...dc_heros] // spread opartor is using(...) same as concat but in this we can concat multiple array

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] 

const real_another_array = another_array.flat(Infinity) // convert subarray in to single array [1,2,3,4,5,6,7,6,7,4,5] you can also give falt(1) -> [1,2,3,4,5,6,7,[6,7,[4,5]]] it will covert only 1 subarray
console.log(real_another_array);



console.log(Array.isArray(1,2,3))// is this array or not it will give false value
console.log(Array.from("Hitesh"))// it will convert any dataype into array ['h','i',t,e,s,h]
console.log(Array.from({name: "hitesh"})) // interesting it will  not convert object into array it will return [] empty value, you need to spefice the key or value format to get into array 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));// it also use to convert into array fromat [100,200,300]