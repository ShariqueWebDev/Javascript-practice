
    'use strict'
    // ARRAY DESTRUCTURING
    let arr = ["car", "bike", "motor Cycle", "aeroplane", "ship"];

    let [car, bike, motor, plane, ship] = arr;

    console.log(plane)

    // OBJECT DESTRUCTURING
    const obj = {
        name: "sharique",
        surname:"shaikh",
        hobbies: {
            ground:"football",
            outside:"visit out of city"
        }
    }

    const {name, surname, hobbies:{ground, outside}} = obj;
    console.log(name);
    console.log(outside);
    let obj1 = {
        name:"zeeshan",
        fondOf:"cricketer"
    }

    console.log({...obj, ...obj1, city:"bhiwandi", nativePlace:"Bihar"});


