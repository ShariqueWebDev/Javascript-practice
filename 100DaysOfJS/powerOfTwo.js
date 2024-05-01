const powerOfTwo = (num)=>{
    let bool= false
    for (let i = 0; i<num; i++){
        if(2**i === num){
             bool = true
        }
    }
    return bool
}
let result = powerOfTwo(32)
console.log(result);