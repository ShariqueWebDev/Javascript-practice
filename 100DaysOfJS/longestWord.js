const findLongestWord = (str) =>{
    if(str.trim().length === 0){
        return false;
    }
    // remove spaces and line
    let trimWord = str.split(/\s+/)
    console.log(trimWord.length);
    // remove extra spaces
    let extraSpaces = str.split(/[' ']+/).join(" ")
    console.log(extraSpaces);
    //character length and check which word have max number of character
    word = str.split(" ")
    word.sort((a, b)=> b.length-a.length)
    console.log(word);
    console.log(word[0]);

}
findLongestWord("hi my        name     is sharique    aslam my name is sharique")