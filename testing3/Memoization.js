// LEVEL 1
// Recurssion Fibonacci
// let cache = {

// }
// function fib(n){//n start from 1
//     if(n==1 || n==2) return 1;

//     if(!cache[n]){
//         let value = fib(n-2) + fib(n-1)
//         cache[n] = value
//     }

//     return cache[n]
// }

// let t1 = performance.now() 
// const r = fib(40)
// console.log(r);
// let t2 = performance.now()
// console.log(t2-t1);


// LEVEL 2

function calc(n){
    let sum = 0;
    for(let i = 0; i<=n; i++){
        sum += i;
    }
    return sum;
}

console.log(calc(5));

function memoize(fun){
    let cache = {}
    return function(...args){
        let n = args[0]
        if(n in cache){
            return cache[n] /*[n] This indicates that the function is trying to retrieve a value from the cache based on the key 'n'. 'n' could be an index, a key, or some other identifier depending on how the cache is implemented.
            So, "return cache[n]" means that the function will return the value associated with the key 'n' from the cache. If 'n' is found in the cache, the previously computed value associated with 'n' will be returned. If 'n' is not found in the cache, it implies that the value needs to be computed, and this value will typically be stored in the cache for future use before being returned.*/
        }
        else{
            let result = fun(n)
            cache[n] = result;
            return result
        }
    }
}

console.time()
const efficient = memoize(calc)
console.log(efficient());
console.timeEnd()