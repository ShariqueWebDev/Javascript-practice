function arrayEquality(arr1, arr2){
    if(arr1.length !== arr2.length){
        return "length is invalid!"
    }
    let chckCondisn = arr1.every((itrator, index)=>{
        return itrator === arr2[index]
    })
    return chckCondisn
}

console.log(arrayEquality([1,2,3], [1,2,3]));
console.log(arrayEquality([1,2,5], [1,2,3]));
console.log(arrayEquality([1,2,5], [1,2,3,4]));
console.log(arrayEquality([], []));