'use strict';

var LocalStorage = function () {
    this.item = null;
    this.load();
    this.write()

}
LocalStorage.prototype.save = function () {

    saveDataToDomStorage('Panier', this.item);
}

LocalStorage.prototype.load = function () {
    this.item = loadDataFromDomStorage('Panier');

    if (this.item == null) {
        this.item = [];
    }
}

LocalStorage.prototype.add = function (idProduct, quantity, product, price) {
        this.write()

    for (var i = 0; i < this.item.length; i++) {
        var result = parseInt(quantity) + parseInt(this.item[i].quantity);
        if (this.item[i].idProduct == parseInt(idProduct)) {
            this.item[i].quantity = result;
            this.save();
            return;
        }
    }

    this.item.push({
        idProduct: idProduct,
        quantity: quantity,
        product: product,
        price: price
    })
    this.save()
}

LocalStorage.prototype.write = function () {
    if (this.item.length == []) {
            console.log('coucou')
        $('#nullTab').toggleClass('hidden')
    } else {
        $('#nullTab').toggleClass('hidden')
        $('#orderTab').toggleClass('hidden')


    }
}
