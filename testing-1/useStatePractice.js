// UPDATE COUNT
const counterFunction = () => {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
};

const updateCount = counterFunction();
updateCount();
for (let i = 1; i < 100; i++) {
  counterFunction();
}

// USESTATE HOW WORKS BEHIND THE SCENCE
function useState(value) {
  let _state = value;

  function setState(givenValue) {
    _state = givenValue;
  }

  function getState() {
    return _state;
  }

  return [getState, setState];
}

function Counter() {
  const [value, setValue] = useState(10);
  function updateValue() {
    setValue(50);
  }
  function getValue() {
    console.log(value());
  }

  return {
    updateValue,
    getValue,
  };
}

let getFunction = Counter();
getFunction.updateValue();
getFunction.getValue();

// ASYNC AWAIT
function register() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("register has been done!");
      res();
    }, 2000);
  });
}

function createEmail() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("account created");
      res();
    }, 3000);
  });
}

function accountDisplayed() {
  return new Promise((res, rej) => {
    console.log("account displayed");
    res("101");
  });
}

function login() {
    return new Promise((res, rej)=>{
        setTimeout(() => {
          console.log("user logged in");
          res()
        }, 2000);

    })
}
async function userCanDownload () {
  return new Promise((res, rej)=>{
    setTimeout(() => {
        console.log("file is downloading...");
        res()
    }, 1500);
  })
}

// register().then(createEmail).then(accountDisplayed).then(login);

async function executionOfAccount() {
    await register();
    await createEmail();
    let display = await accountDisplayed();
    await login();
    await userCanDownload();
    return display;
}

async function secondaryData(){
  return new Promise((res, rej)=>{
    console.log("this is secondary data");
    res();
  })
}

async function thirdFunction(){
  await executionOfAccount()
  await secondaryData()
}
thirdFunction()
//  let a = executionOfAccount()
//  a.then((d)=>{
//   console.log("a value is " + d);
//  })
  // await secondaryData();



