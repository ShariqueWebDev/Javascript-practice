const a =[1,2,[3,4,1,[5,9,2,8]], 6, 7]
const b = a.flat(2)
console.log(b);

const c = a.flatMap((i)=>{
    return i
})
console.log(c.flatMap((i)=>i));

const string = "hi friends my name is sharique";
const splitString = string.split(" ")
console.log(splitString);
const subSplit = string.split("")
console.log(subSplit);
const arrString = splitString.flatMap((i)=>i.split(""))
console.log(arrString);


// MEHTOD NO : 1 Call Back
const asynchAwait = async (resolve) =>{
    const cal = await 5000+ 1000;
    const res = cal + 5000;
    resolve(res)
}

const callback = async (res) =>{
    const callbackRes = await res * 2
    console.log(callbackRes);
}

asynchAwait(callback)


// MEHTOD NO : 2 Asynch Await
const asynchAwaitSecond = async () =>{
    const api = await 100 + 200
    console.log(api);
    const apiCalculation = await api * 3

    return apiCalculation;
}
const asynchAwaitSecondResult = asynchAwaitSecond();
console.log(asynchAwaitSecondResult.then((i)=>console.log(i)));



