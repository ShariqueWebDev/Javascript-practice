const sumOfSquare=(arr)=>{
    let count = 0;
    arr.map((i)=>{
        let a = i*i;
        count = count+=a
        return count
    })
    return count
}

let result  = sumOfSquare([1,2,3,4,5])
console.log(result);