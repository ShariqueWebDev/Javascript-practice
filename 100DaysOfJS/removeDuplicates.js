function removeDuplicates(arr){
    // LEVEL 1
    let removeDup = new Set([...arr]) 
    console.log([...removeDup]);

    // LEVEL 2
    let rmDUsingRedMthd = arr.reduce((accum, itrator)=>{
        return accum.includes(itrator)?accum: [...accum, itrator]
    },[])
    console.log(rmDUsingRedMthd);

    // LEVEL 3
    let newArr = [];
    arr.forEach((i)=>{
        if(!newArr.includes(i)){
            newArr.push(i)
        }
    })
    
    console.log(`this is forEach Method: ${newArr} `);
    
    
}

removeDuplicates([1,1,2,2,2,3,5,5,6,8,18,9,7,11,4,4,9,9])