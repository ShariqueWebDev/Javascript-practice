function checkTriangle(ab, bc, ac){
    if (ab <= 0 || bc <= 0 || ac <= 0){
        console.log("0 length is invalid! ");
    }
    else if(ab === bc && ab ===ac){
        console.log("this angle is Equilateral!");
    }
    else if(ab===bc || ab===ac || bc===ac){
        console.log("this angle is isoscalene");
    }
    else if (ab!==bc!==ac){
        console.log("this angle is scalene");
    }
}

checkTriangle(2,2,0);