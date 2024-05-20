console.log("A");

setTimeout(() => {
 console.log("B");   
});

["C", "D"].forEach((i)=>console.log(i))

console.log("E");

// output will be:- A C D E B