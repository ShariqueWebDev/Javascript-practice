const isPalindrome = (str)=>{
    str = str.toLowerCase().replace(/\W/g, "");
    console.log(str);
    let reverse_str = str.split("").reverse().join("");
    console.log(reverse_str);
    return str === reverse_str?true:false;
}

console.log(isPalindrome("A man, a plan, a canal"));
console.log(isPalindrome("racercar"));

// second example
let str  = "my name is sharique, my colleague name is also sharique, and that sharique is smart!";
let changeStr = str.replace(/\W/g, " ")
let splitBy = str.split(" ")
// console.log(splitBy);
let byComma = splitBy.join(",")
console.log(byComma);
console.log(changeStr);

// third example: we can use this method alternatively when we dont need array of an element. all over the string character split individually accept in array form
let str1 = "It was a dark and stromy false night."
let word = str1.split(/\W/)
console.log("the word is: " + word);
// output is: the word is: It,was,a,dark,and,stromy,false,night,
let word1 = str1.split(" ")
console.log(word1);
// output is: [
//     'It',    'was',
//     'a',     'dark',
//     'and',   'stromy',
//     'false', 'night.'
//   ]





