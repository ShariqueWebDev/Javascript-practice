// const obj = {
//     a : 1,
//     b : null,
//     c: undefined,
//     d:"hello"
// }

// let newArr = Object.entries(obj)
// console.log(newArr);

// let removeItem = newArr.filter(([_, item])=>{
//     return item != undefined || item != null
// })
// console.log(removeItem);

// let newObj = Object.fromEntries(removeItem)
// console.log(newObj);
// console.log(Object.values(...newObj));

const object1 = {
    a:1,
    b:null,
    c:undefined,
    d:"hello"
}

const convArray = Object.entries(object1)
console.log(convArray);
const filterArray = convArray.filter(([_,i])=>{
    return i != undefined || i != null
})
const convObj = Object.fromEntries(filterArray)

console.log(Object.values(convObj));







