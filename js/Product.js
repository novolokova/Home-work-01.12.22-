"use strict";

class Product {
  /**
   *
   * @param {string} name
   * @param {number} price
   * @param {string} currency
   * @param {number} quantityInStock
   */
  constructor(name, price, currency, quantityInStock = QUANTITY_IN_STOCK) {
    this.name = name;
    this.price = price;
    this.currency = currency;
    this.quantityInStock = quantityInStock;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    if (checkString(name)) {
      this._name = name;
    }
  }

  get price() {
    return this._price;
  }
  set price(price) {
    if (checkNumberGreatZero(price) && price !== 0) {
      return (this._price = price);
    }
    throw new RangeError(`"${price}" must be bigest than '0' `);
  }

  get currency() {
    return this._currency;
  }
  set currency(currency) {
    if (
      currency === CURRENCY_UAH ||
      currency === CURRENCY_USD ||
      currency === CURRENCY_EUR
    ) {
      return (this._currency = currency);
    }
    throw new TypeError("currency must be 'UAH' or 'USD' or 'EUR'");
  }

  get quantityInStock() {
    return this._quantityInStock;
  }
  set quantityInStock(quantityInStock) {
    if (checkNumber(quantityInStock)) {
      if (checkIsIntegerGreatZero(quantityInStock)) {
        this._quantityInStock = quantityInStock;
      }
    }
  }

  getProductInfo() {
    return `${this._name} - ${this._price} ${this._currency}
quantity in stock: ${this._quantityInStock}`;
  }

  byProduct(quantity) {
    if (checkIsIntegerGreatZero(quantity)) {
      if (quantity <= this._quantityInStock) {
        return `Total amount: ${(quantity * this._price).toFixed(2)} ${this._currency}`;
      }
      return `Insufficient quantity in stock. Available ${this._quantityInStock} items for order`;
    }
  }
}

try {
  const product = new Product("milk", 45, "EUR", 15);
  // console.log(product);
  // console.log(product.getProductInfo());
  // console.log(product.byProduct(3));
} catch (error) {
  console.log(error);
}
