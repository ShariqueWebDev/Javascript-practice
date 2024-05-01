const countSpecificCharacter =(str, char) =>{
    let splitChar = str.split("")
    console.log(splitChar);
    let charLength = splitChar.filter((i)=>i===char)
    console.log(charLength.length);
    // if(char.length>0){
    //     console.log(char.length);
    // }
}

countSpecificCharacter("MissIssippi", "M")