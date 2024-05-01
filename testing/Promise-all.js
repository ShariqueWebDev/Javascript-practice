const promise1 = Promise.resolve(3);
const promise2 = 42;

const promise3 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 100, "foo");
});

const promise4 = new Promise((resolve, reject)=>{
    setTimeout((father)=>{
        resolve("shaikh sharique" + " " + father)
    }, 1000, "alsam")
})

const promise5Value = () =>{
    let city="bhiwandi"
    let state = "maharashtra"
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(city , state)
        }, 3000);
    })
}

Promise.all([promise1, promise2, promise3, promise4, promise5Value(promise5)]).then((value)=>{
    console.log(value);
})