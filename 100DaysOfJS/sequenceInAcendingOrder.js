const inAscendingOrder=(arr)=>{
    console.log(arr);
    let sortArr = arr.sort((a, b)=> a - b)
    console.log(sortArr);
}

inAscendingOrder([7,2,6,5,1,3,8])