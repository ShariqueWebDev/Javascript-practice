// const obj = [
//     {name:"sharique"},
//     {name:"tarique"},
//     {name:"zeeshan"},
//     {name:"anzalna"},
// ];

// let addId;
// console.log( addId = obj.map((item, i)=>{
//     return {...item, id: Date.now() + i}
// }));

const obj = [
    {name:"sharique"},
    {name: "tarique"},
    {name: "zeeshan"},
    {name: "anzalnam"}
]

const obj2 = obj.map((i, index)=>{
    return {...i, id: Date.now() + index}
});

console.log(obj2);