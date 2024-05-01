function counterFunction() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

// CLOSURE FUNCTION
function useState(initial) {
  let _state = initial;

  function setState(value) {
    _state = value;
  }

  function getState() {
    return _state;
  }
  return [getState, setState];
}

// function useState() {
//   let _state = 10;

//   function setState() {
//     _state = 12;
//   }

//   function getState() {
//     return _state;
//   }
//   return [getState, setState];
// }

function Counter() {

  const [count, setCount] = useState(0);
  function click() {
    setCount(10);
  }

  function render() {
    console.log(count());
  }

  return {
    click,
    render
  };
}

const counter = Counter();
counter.click();
counter.render();

// 2. SECOND EXAMPLE

const updateCount = counterFunction();
updateCount();
updateCount();
updateCount();
updateCount();

// ASYNCH AND PROMISES
function register() {
  return new Promise((res, reject) => {
    console.log("account register");
    res();
  });
}

function createEmail() {
  return new Promise((res, rej) => {
    console.log("creating Email");
    res();
  });
}

function accountDisplayed() {
  return new Promise((res, rej) => {
    rej("account could not displayed");
    return;
    // console.log("account displayed");
  });
}

function login() {
  return new Promise((res, rej) => {
    console.log("email login");
    res("login Success");
  });
}


// register()
// .then(createEmail)
// .then(login)
// .then(accountDisplayed);

// register(()=>{
//     createEmail(()=>{
//         login(()=>{
//             accountDisplayed()
//         })
//     })
// })

async function runExecution() {
  try {
    await register();
    await createEmail();
    const loginMessage = await login();
    await accountDisplayed();
    console.log(loginMessage);
  } catch (error) {
    console.log(error);
  }
}

runExecution()
  .then(() => {
    console.log("All Execution Set!");
  })
  .catch(() => {
    console.log("Execution Failed");
  });
