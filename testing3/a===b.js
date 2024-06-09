let a = {};
let b = a;
console.log(a==b);
console.log(a===b);
console.log(typeof a);
console.log(typeof b);

let c = "10"
console.log(typeof c);
console.log(typeof +c);
console.log(typeof Number.parseInt(c));

let d = new Set([1,2,3])
let e  = new Array("a", "b")
console.log(d);
console.log(e);
let f = Array.of(1,2,3)
console.log(f);

let g = new Array()
g[0]="sha"
g[1]="tha"
console.log(g);

let h = {
    a:"apple",
    b:"baby",
    c:"cat",
    d:"dumpyard"
}

let j = [11, 12, 13, 14, 15]

let i = Array.from(j, (i)=>i)
console.log(i);


