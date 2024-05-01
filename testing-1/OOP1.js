function BankAccount(AccountName, Balance = 0){
    this.AccountName = AccountName;
    this.AccountNumber = Date.now();
    this.Balance = parseInt(Balance);

    this.deposite = function(depBalance) {
        this.Balance += depBalance;
    }
}

BankAccount.prototype.withdraw = function(amount){
    this.Balance -= amount
}

BankAccount.prototype.minusTwoNum = function(num1, num2){
    let total = num1 - num2;
    console.log(total) 
}

BankAccount.prototype.sumTwoNumbers = function (a , b){
    let total = a+b;
    console.log(total)
     
}

const rakeshAccount = new BankAccount("Rakesh", 25000)

rakeshAccount.minusTwoNum(420, 400)
rakeshAccount.withdraw(10)
rakeshAccount.sumTwoNumbers(30, 15)
console.log(rakeshAccount.Balance)
rakeshAccount.deposite(200)
console.log(rakeshAccount.Balance)

console.log("Sharique Account Started From Here............");

const shariqueAccount = new BankAccount("Sharique", 1000)

shariqueAccount.minusTwoNum(200, 150)
shariqueAccount.withdraw(30)
shariqueAccount.sumTwoNumbers(50, 20)
console.log(shariqueAccount.Balance)
shariqueAccount.deposite(100)
console.log(shariqueAccount.Balance)


// const accountForm = document.querySelector("#accountForm")
// let accountName = document.querySelector("#accountName")
// let initialBalance = document.querySelector("#initialBalance")
// let accountArr = [];

// accountForm.addEventListener("submit", (e)=>{
//     e.preventDefault();
//     const sharique = new BankAccount(accountName.value, +initialBalance.value )
//     accountArr.push(sharique)

//     console.log(accountArr)
// })

// const depositeForm = document.querySelector("#depositeForm")
// let accountNumber = document.querySelector("#accountNumber")
// let updateBalance = document.querySelector("#updateBalance")

// depositeForm.addEventListener("submit", (e)=>{
//     e.preventDefault();
//     let changeValue = accountArr.find((account)=>account.AccountNumber === +accountNumber.value)
//     changeValue.deposite(parseInt(+updateBalance.value))
//     console.log(accountArr)
// })



// const shariqueAccount = new BankAccount("Sharique", 10000);
// shariqueAccount.deposite(500);
// shariqueAccount.withdraw(250);

// const ruskhsanaAccount  = new BankAccount("Ruskhsana", 2500000);
// ruskhsanaAccount.deposite(4500)
// ruskhsanaAccount.withdraw(2200)

// console.log(shariqueAccount , ruskhsanaAccount);

let a = "35"+15-55;
console.log(a)
