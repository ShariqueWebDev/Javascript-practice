let values = [];
async function fetchDataFromApi(url){
    const res = await fetch("https://dummyjson.com" + url)
    const data = await res.json()
    // console.log(data);
    addData(data)
}

const addData = (obj) =>{
  let sVal=[];
  let uVal=[];
    values.push(obj)    
    // values.map((i)=>console.log(i?.products?.slice(0,2)?.map((s)=>console.log(sVal.push(s.id)))))
    values.map((i)=>console.log(i?.users?.slice(0,1)))

    // console.log(sVal);
  }
  
fetchDataFromApi('/users')
fetchDataFromApi('/products')



// let dataGlobal;

// const getData = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const data = await response.json();
//   dataGlobal = data;
//   return data;
// };

// (async () => {
//   await getData();
//   console.log(dataGlobal);
// })();



