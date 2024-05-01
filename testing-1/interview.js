// NULLISH COALESCING OPERATOR 
const num1 = undefined;
const num2 = null;
const num6 = "";
const num3 = 0;
const num4 = 100;

const orOutput = num1 ||num2||num3||num4;
console.log(`the first console result is : ${orOutput}`);

const trueOutput = num1 ?? num2 ?? num6 ?? num3 ?? num4;
console.log(`the second console result is : ${trueOutput}`);

