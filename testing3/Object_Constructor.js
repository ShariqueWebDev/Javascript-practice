// SET METHOD
let myArray = new Set([1,2,3])
console.log(myArray);
myArray.add(4)
console.log(myArray);

// MAP METHOD
let mapArray = new Map([["b", "ball"], ["c", "cat"]])
let setValue = mapArray.set("a", "apple")
console.log(setValue);

let itratMapArray = setValue.forEach((key, value)=>{
    console.log(key, value);
})

