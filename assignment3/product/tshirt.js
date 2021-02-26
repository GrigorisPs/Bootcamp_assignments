var Color = require('../materials/color');
var Size = require('../materials/size');
var Fabric = require('../materials/fabric');


function GetRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
}

class Tshirt {
    constructor(random, name, size, color, fabric) {
        if (random) {
            console.log('random defined')
            this.name = 'T-shirt'
            this.size = Object.keys(new Size().size)[GetRandomInt(6)];
            this.color = Object.keys(new Color().color)[GetRandomInt(6)];
            this.fabric = Object.keys(new Fabric().fabric)[GetRandomInt(6)];
        } else {
            this.name = name;
            this.size = size;
            this.fabric = fabric;
            this.color = color;
            this._basePrice = 10;
            this.price = this._basePrice;
        }
    }
    set name(value) {
        this._name = value;
    }
    get name() {
        if (this._name === undefined) return ''
        return this._name.toUpperCase()
    }
    set size(value) {
        let mySize = new Size()
        this._size = mySize.size[value];
    }
    get size() {
        return Object.keys(new Size().size)[this._size]
    }
    set color(value) {
        let myColor = new Color()
        this._color = myColor.color[value];
    }
    get color() {
        return Object.keys(new Color().color)[this._color]
    }
    set fabric(value) {
        let myFabric = new Fabric();
        this._fabric = myFabric.fabric[value];
    }
    get fabric() {
        var fabric = new Fabric()
        return Object.keys(fabric.fabric).find(k => fabric.fabric[k] === this._fabric)
    }
}

module.exports = Tshirt