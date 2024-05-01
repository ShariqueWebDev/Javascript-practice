// Regex name interchangeably we can call regular expression
let str = "shariqui is homely boy and Sharique is good boy sharique"
let spliStr = str.split(" ")
spliStr = spliStr.join("")
spliStr = spliStr.split("")
console.log( spliStr);
let regex = /sh/g;
let arr = []
for(let char of spliStr){
    if(char === "s"){
        arr.push(char)
    }
}
console.log(arr);
// regex = /sharique/g;
// regex = /sharique/i;

console.log(regex.exec(str));
console.log(regex.exec(str));

let testFun = regex.test(str)
console.log(testFun);

//  it will return element of array which character exist in string
let matchFun = str.match(regex)
console.log(matchFun);
