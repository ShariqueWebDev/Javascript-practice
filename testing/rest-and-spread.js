    // // function a (...arr) {
    // //     const [a,b,c,d,e,f,g,h,i] = arr
    // //     console.log(e);
    // //     console.log(...arr)
    // // }

    // // a(1,2,3,4,5,6,7,8,9)

    // const spreadValues = [25, 30, 35, 40, 45, 50]
    // // const restValues = [ b, c, d, e, f, g]


    // function spreadOperator(...arr){
    //     const [b, c, d, e, f, g] = arr
    //     console.log(arr);
    //     console.log(e);
    // }

    // // spreadOperator(...spreadValues)

    // const obj = {
    //     name:"sharique",
    //     occupation:'software engineer',
    //     address:"shanti nagar bhiwandi"
    // }
    // console.log({...obj, address:"azad nagar"})

    // let arr1 = [1, 2, 3, 4, 5]
    // let obj1 = {...arr1}
    // console.log(obj1);
    // let arr2 = Object.entries(obj1)
    // console.log(arr2);
    // let arr3 = Object.values
    // console.log(arr3);

    // let arr4 = [2, 4, 6, 8, 10]
    // // THIS METHOD WILL CLONE THE ENTIRE ARRAY AND IT WILL FOLLOW CALL BY REFERENCE PRINCIPLE 
    // let arr5 = arr4
    // arr4.push(12)
    // console.log(arr5);

    // // THIS METHOD WILL CREATE A COPY OF ARR4 VARIABLE AND IT WILL REACT AS CALL BY VALUE
    // let arr6 = [3, 6, 9, 12, 15]
    // let arr7 = [...arr6]
    // arr6.push(18)
    // console.log(arr7);
    // console.log(arr6);

    // // IT HAS BEEN OLD
    // let arr8 = arr6.concat(arr5)
    // console.log(arr8);

    // // IT INTRODUCE NEW METHOD
    // let arr9 = [...arr1, ...arr4]
    // console.log(arr9);

    // let arr6 = ar
    
    // ACTUAL USE OF REST OPERATOR
    const fruits = ["banana", "mango", "kiwi", "pinneaple", "sweet apple"]

    const [b,m, ...fruitArr] = fruits
    console.log(fruitArr); 
