function *gen(){
    let i = 0
    while(true){
        yield i++
    }
    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4
}

let genFunc = gen()
console.log(genFunc.next())
console.log(genFunc.next())
console.log(genFunc.next())
console.log(genFunc.next())
console.log(genFunc.next())