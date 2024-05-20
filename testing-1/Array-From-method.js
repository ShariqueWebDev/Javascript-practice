
  let s = new Set([1, 2, 3]);
  console.log(s);
  let arr = Array.from(s);
    console.log(arr);
  let num = [10, 20, 30, 40, 50];
  let itrator = Array.from(num, (it) => it);
    console.log(itrator);

  //   ARRAY FROM OBJECT

  let newArr = ["a", "b", "c", "d"];
  let obj = newArr.reduce((accumulator, itrator, index)=>({...accumulator, [index]: itrator }),{});
  // let obj = newArr.reduce((accumulator, itrator, index)=>({...accumulator, [index]:itrator}), {})
  let seprate = Object.keys(obj)
  console.log( obj);
  console.log("The reduce result is: " + seprate);

  let check = Object.keys(obj);
  console.log(check);
  let checkAgain = Object.values(obj);
  console.log(checkAgain);



  let newArray = [
    ["e", "elephant"],
    ["f", "fish"],
    ["g", "gorgous"],
    ["h", "hores"],
  ];
  let newObj = Object.fromEntries(newArray);
  console.log(newObj);

  let carSpecification = {
    color: "red",
    width: "10cm",
    height: "20cm",
    feature: "EV mode",
  };

  let returnArr = Object.entries(carSpecification);

  // console.log(returnArr);
  let filterArr = returnArr.filter(
    ([_, i]) => i == "red" || i == "10cm" || i == "EV mode"
  );
  // console.log(filterArr);
  let convertObject = Object.fromEntries(filterArr);
  // console.log(convertObject);

  let removeIndex = [
    ["e", "elephant"],
    ["f", "fish"],
    ["g", "gorgous"],
    ["h", "hores"],
  ];
  let filterIndex = removeIndex.map((i) => i.slice(1).findIndex((miniI)=>miniI));
  console.log(filterIndex);

  let onlyKeys = Object.keys(carSpecification);
  // console.log(onlyKeys);

  let onlyValues = Object.values(carSpecification);
  console.log(onlyValues);

  let multiArray = [["sharique"], ["tarique"], ["zeeshan"]]

  let removeFlatArr = multiArray.map((i)=>i.find((I)=>I))
  console.log(removeFlatArr);

  let useFlatMap = multiArray.flatMap((i)=>i)
  console.log(useFlatMap);

  
  let useFlat = multiArray.flat(1)
  console.log(useFlat);

  let ArrayOf = Array.of(1,2,3, true)
  console.log(ArrayOf);

  let setArray = new Set(["a",1,true, false])
  console.log(setArray);
  let ArrayFrom = Array.from(setArray)
  console.log(ArrayFrom);



