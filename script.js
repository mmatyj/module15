function Phone(brand, price, color, size) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.size = size;
}

Phone.prototype.printInfo = function () {
    console.log("the phone brand's " + this.brand + ", color's " + this.color + " and it costs " + this.price)
}

Phone.prototype.addInfo = function () {
    console.log('And btw it size is ' + this.size)
}

var iPhone6 = new Phone("apple", 450, "pink");
iPhone6.printInfo();

var Samsung = new Phone('samsung', 367, 'lightgreen');
Samsung.printInfo();

var OnePlus = new Phone('OnePlus', 837, "red");
OnePlus.printInfo();

var Nokia = new Phone('nokia', 728, "black", 7.2);
Nokia.printInfo();
Nokia.addInfo();