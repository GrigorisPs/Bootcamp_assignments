module.exports =
    class Cash {
        constructor(tshirt) {
            this.tshirt = tshirt
        }

        pay() {
            return this.tshirt.price
        }
    }