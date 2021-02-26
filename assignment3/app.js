var Tshirt = require('./product/tshirt');
var Color = require('./materials/color');

console.log(new Color().color)

let myTShirt = new Tshirt(true, 'AAA', 'XS', 'RED', 'WOOL')
console.log(myTShirt)
console.log(`${myTShirt.name}, ${myTShirt.size}, ${myTShirt.color}, ${myTShirt.fabric}`)

let myTShirt2 = new Tshirt(false, "AAA", 'XS', 'RED', 'WOOL')
console.log(myTShirt2)
console.log(`${myTShirt2.name}, ${myTShirt2.size}, ${myTShirt2.color}, ${myTShirt2.fabric}`)