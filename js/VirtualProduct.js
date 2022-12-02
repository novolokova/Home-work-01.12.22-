'use strict'

class VirtualProduct extends Product {
  /**
   *
   * @param {string} name
   * @param {number} price
   * @param {string} currency
   * @param {number} quantityInStock
   * @param {string} sizeMemory
   */
  constructor(name, price, currency, quantityInStock, sizeMemory) {
    super(name, price, currency, quantityInStock);
    this.sizeMemory = sizeMemory;
  }
  get sizeMemory() {
    return this._sizeMemory;
  }
  set sizeMemory(sizeMemory) {
    if (checkNumber(sizeMemory)) {
      this._sizeMemory = sizeMemory;
    }
  }

  getProductInfo() {
    return `memory card: ${super.getProductInfo()}
Size memory: ${this._sizeMemory} MB`;
  }
}

try {
  const product3 = new VirtualProduct("ddr2 intel", 750, "USD", 19, 256);
  // console.log(product3);
  // console.log(product3.getProductInfo());
  // console.log(product3.byProduct(8));
} catch (error) {
  console.log(error);
}
