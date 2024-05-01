function findMiniumValue(arr){
    if(arr.length <1){
        return undefined
    }
    let spreadElement = Math.min(...arr)
    return spreadElement;
}

console.log(findMiniumValue([5,10,2,8]))
console.log(findMiniumValue([5,-3,0,12,-7]))
console.log(findMiniumValue([]));