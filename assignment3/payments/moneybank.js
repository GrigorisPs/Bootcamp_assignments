module.exports =
    class MoneyBank {
        constructor(tshirt) {
            this.tshirt = tshirt
        }

        pay() {
            let extraPrice = 1.5
            return this.tshirt.price + extraPrice
        }
    }