

    const brands = ["ferrari", "audi", "mercedez", "bmw", "kawasaki", "waksvegen"]

    const objElem = {name:"sharique", city:"bhiwandi"} 

    for (let i = 0; i < brands.length; i++) {
        console.log("for " + brands[i].toUpperCase())
    }

    // FOREACH LOOP CHANGE MAIN ARRAY
    brands.forEach((items) => {
        console.log("forEach " + items.toUpperCase())
    });
    
    // FOR OF LOOP USE WITH ARRAY
    for (const j of brands) {
        console.log("for of " + j.toUpperCase())
    }
    
    // MAP LOOP RETURN NEW ARRAY
    brands.map((item) => {
        console.log("map " + item.toUpperCase())
    })

    // FOR IN LOOP USE WITH OBJECT ONLY
    for(const key in brands){
        console.log("for in " + brands[key].toLocaleLowerCase())
    }




