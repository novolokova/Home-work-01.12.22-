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
    if (typeof sizeMemory !== "string") {
      throw new TypeError("sizeMemory must be string");
    }
    this._sizeMemory = sizeMemory;
  }
  getProductInfo() {
    return `Memory: ${this._name} (${this._sizeMemory})
        price: ${this._price} ${this._currency}`;
  }
}
try {
  const product3 = new VirtualProduct("ddr2 intel", 750, "USD", 19, "256 MB");
  console.log(product3);
  console.log(product3.getProductInfo());
  console.log(product3.byProduct(8));
} catch (error) {
  console.log(error);
}
