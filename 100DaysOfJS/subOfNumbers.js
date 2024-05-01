function sumOfDigits(numbers){

    // FASTEST WAY TO CONVERT ANY TYPE OF NUMBER INTO ARRAY FORM
    // let convInArray = Array.from(String(numbers), Number)
    // console.log(convInArray)
    
    let convStr = numbers.toString()
    let splitStr = convStr.split("")
    let conNum = splitStr.map((i)=>{
        return Number.parseInt(i)
    })
    let sumOfNumber = conNum.reduce((accumulator, itrator)=>accumulator += itrator, 0)
    return sumOfNumber

}

console.log(sumOfDigits(12345));

// let a = "1"
// let b = Number.parseInt(a)
// console.log(typeof b);