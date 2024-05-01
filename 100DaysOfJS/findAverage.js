function findAverage(arr){
    let subTotal = 0;
    arr.map((i)=>{
        return subTotal = subTotal + i
    })
    let avg = subTotal/arr.length
    console.log(avg);
}

findAverage([5,10,2,8])