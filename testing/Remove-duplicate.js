// LEVEL - 1
  const arr = [1, 2, 2, 2, 3, 4, 5, 5, 8, 9, 9, 7, 7];
  
  // Convert Into Object
  const newArr = new Set(arr)
  console.log(newArr);
  let removeElem = [...newArr];
  // arr.forEach((element) => {
  //   if (!removeElem.includes(element)) {
  //     removeElem.push(element);
  //   }
  // });

  console.log(removeElem);

  //   LEVEL - 2
  const arr1 = [1, 2, 2, 2, 3, 4, 5, 5, 8, 9, 9, 7, 7];
  function removeDuplicatesElement(arr) {
    return [...new Set(arr)];
  }

  console.log("Level 2: " + removeDuplicatesElement(arr1));

  //   LEVEL - 3
  const arr2 = [1, 2, 2, 2, 3, 4, 5, 5, 8, 9, 9, 7, 7];
  const arr3 = arr.reduce((acc, elem) => {
    return acc.includes(elem) ? acc : [...acc, elem];
  }, []);

  const arr4 = [1,2,2,2,1,1,5,5,6,666,8,7,7,7,9,9,9,9,1,0,0]

  const filterArray = arr4.reduce((accumulator, elem)=>{
    return accumulator.includes(elem)?accumulator:[...accumulator, elem]
  },[])

  console.log(filterArray);

  
  
  const filterArray1 = [...new Set(arr4)] 
  console.log(filterArray1);
  console.log(arr4);

