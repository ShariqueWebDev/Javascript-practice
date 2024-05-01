// let info;
// const mainFunction = (callback) =>{
//     const arr = [1, 2, 3, 4, 5]
//     callback(arr)
// }

// const callback = (param) =>{
//     info = param
// }

// mainFunction(callback)
// console.log(info);

let info

function mainFunction(callback){
    let arr = [10, 20, 30, 40, 50]
    callback(arr)
}

function callback(recieveValue){
    info = recieveValue;
}

mainFunction(callback)

console.log(info);