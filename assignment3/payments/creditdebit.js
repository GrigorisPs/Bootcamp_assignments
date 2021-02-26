module.exports =
    class CreditDebit {
        constructor(tshirt) {
            this.tshirt = tshirt
        }

        pay() {
            let extraPrice = 3.5
            return this.tshirt.price + extraPrice
        }
    }