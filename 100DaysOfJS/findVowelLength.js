const findVowelsFun=(str)=>{
    let vowels = ["a", "e", "i", "o", "u"]
    str = str.toLowerCase()
    let arr = str.split("")
    let count = 0;
    for(let char of arr){
        if(vowels.includes(char)){
            count++;
        }
    }
    console.log(count);
}

findVowelsFun("Hellooo World ")