var TShirt = require('./product/tshirt');
var Credit = require('./payments/creditdebit');
var Cash = require('./payments/cash');
var MoneyBank = require('./payments/moneybank');
var PaymentStrategy = require('./strategy/paymentStrategy');


// let myTShirt = new TShirt(true, "AAA", 'XS', 'RED', 'WOOL')
// console.log(myTShirt)
// console.log(`${myTShirt.name}, ${myTShirt.size}, ${myTShirt.color}, ${myTShirt.fabric}`)

// let myTShirt2 = new TShirt(false, "AAA", 'XS', 'RED', 'SILK')
// console.log(myTShirt2)
// console.log(`${myTShirt2.name}, ${myTShirt2.size}, ${myTShirt2.color}, ${myTShirt2.fabric}`)


var myTShirt = new TShirt(true)

var cd = new Credit(myTShirt);
var mb = new MoneyBank(myTShirt);
var cash = new Cash(myTShirt);

var paymentStrategy = new PaymentStrategy()
paymentStrategy.type = cd // (bank) (cash)
console.log(paymentStrategy.pay())

paymentStrategy.type = mb // (credit) (cash)
console.log(paymentStrategy.pay())

paymentStrategy.type = cash // (bank) (credit)
console.log(paymentStrategy.pay())
