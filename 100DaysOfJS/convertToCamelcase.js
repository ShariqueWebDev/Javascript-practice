function convertToCamelCase(str){
    let syntax = str.trim().split(" ") 
    syntax = syntax.map((i, index)=>{
        if(index === 0){
            return i
        }
        else{
            return i.charAt(0).toUpperCase() + i.slice(1)

        }
    })
    return syntax.join("")
}

let result = convertToCamelCase('hello world mr sharique')
console.log(result);


