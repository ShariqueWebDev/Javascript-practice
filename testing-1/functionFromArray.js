// HOW TO CALL SIGNLE NESTED FUCTION
const singleCallFunction = () =>{
    const add = "shanti nagar,bhiwandi";
    const nameFunction=()=>{
        const Add = add;
        return Add;
    }
    return nameFunction;
}

let firstCall = singleCallFunction();
console.log(firstCall());


// HOW TO CALL DUOBLE NESTED FUCTION USING ARRAY
function doubleNestedFunctionCall(){
    function yourSurname(){
        let sirName = " SHAIKH";
        return sirName;
    };

    function yourName (){
        let firstName = "SHARIQUE";
        return firstName;
    };
    return [yourSurname, yourName]
};

const [sName, fName] = doubleNestedFunctionCall();

console.log(fName());


// HOW TO CALL DUOBLE NESTED FUCTION USING OBJECT
function objectFunction(){
    function yourSurname(){
        let sirName = " Shaikh";
        return sirName;
    };

    function yourName (){
        let firstName = "Tarique";
        return firstName;
    };
    return {yourSurname, yourName}
}

let objMain = objectFunction()
console.log(objMain.yourName());


// CONVERT INTO #ShariqueAslamShaikh

let user = "sharique aslam shaikh";

const createHashTag = (userName)=>{
    let splitName = userName.split(" ")
   let mapFunc = splitName.map((item)=>{
        return item.charAt(0).toUpperCase()+item.slice(1)
    })
    let joinUser = mapFunc.join("")
    let HashTage = `#${joinUser}`
    return HashTage;
    // console.log(HashTage);
}

let returnValue = createHashTag(user)
console.log(returnValue);

