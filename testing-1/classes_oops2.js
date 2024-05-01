// class BankAccount {
const BankAccount = class {
    customerName;
    accountNumber = Date.now();
    #Balance;

    constructor(customerName, Balance = 0){
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.#Balance = Balance;
    }
    
    deposite(amount){
        if(isNaN(this.amount)){
            this.#Balance += amount;
            throw new Error("please enter valid number")
        }
    }

    withdraw(amount){
        this.#Balance -= amount;
    }
}

const shariqueAccount = new BankAccount("Sharique Aslam", 500);
shariqueAccount.Balance = 25025
console.log(shariqueAccount);

shariqueAccount.deposite(2000);
console.log(shariqueAccount);

shariqueAccount.withdraw(1000);
console.log(shariqueAccount);

// INHERITANCE CLASS AND METHODS IN CLASS OBJECT
class savingAccount extends BankAccount{
    loanLimits = "50000";
    constructor(customerName, Balance){
        super(customerName, Balance)
    }
}

const ruskhsanaAccount = new savingAccount("Rukhsana Bano", 10000)

console.log(ruskhsanaAccount);

class CurrentAccount extends BankAccount {
    depLimit = '1500000';

    constructor(customerName, Balance){
        super(customerName, Balance)
    }
}

const aslamAccount = new CurrentAccount("Aslam Bhai Dubai wale", 100000000)
console.log(aslamAccount);

aslamAccount.deposite(250);
console.log(aslamAccount);

aslamAccount.withdraw(500);
console.log(aslamAccount);

aslamAccount.withdraw(9900000);
console.log(aslamAccount);
