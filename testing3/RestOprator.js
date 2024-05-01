const arr = [1, 2, 3, 4, 5];

function Count(...rest){
    console.log(rest);
    const [a, b, c, d, e] = rest;
    console.log(a, b, c, d, e);
}

Count(...arr)


function count1(...char){

    const [a, b, c, d] = char
    console.log(a, b, c, d);
}

count1("e", "f", "g", "h")

let arr1 = [11,12,13,14]
console.log(...arr1);

// let arr2 = [...arr1, [...arr]]
// console.log(arr2);
// let arr3 = arr2.flat(1)

// console.log(arr3);


