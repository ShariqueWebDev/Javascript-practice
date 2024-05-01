// const promiseObj = new Promise((resolve, reject)=>{
//     const req = false;
//     if(req == true){
//         resolve([1, 2, 3, 4, 5])
//     }else{
//         reject("Some Error Occurred!")
//     }
// }).then((value)=>{console.log(value);}).catch((err)=>{
//     console.log(err);
// })

const promise1 = new Promise((res, rej) => {
  const req = false;
  if (req == true) {
    res({ name: "sharique", age: 29 });
  } else {
    rej("i catched some error!");
  }
});

promise1.then((vlaue) => {
    console.log(vlaue);
  }).catch((error) => {
    console.log(error);
  }).finally((fin) => {
    console.log("the request has been done! it could be whether done or not be fulfiled");
  });
