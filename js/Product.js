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
    if (typeof name !== "string") {
      throw new TypeError("name must be string");
    }
    this._name = name;
  }
  get price() {
    return this._price;
  }
  set price(price) {
    if (typeof price !== "number") {
      throw new TypeError("price must be number");
    }
    if (price <= MIN_PRICE) {
      throw new RangeError("enter a price greater than '0'");
    }
    this._price = price;
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
    if (typeof quantityInStock !== "number") {
      throw new TypeError("quantity must be number");
    }
    if (!Number.isInteger(quantityInStock) || quantityInStock < 0) {
      throw new TypeError("quantity must be an integer and not less than 0");
    }
    this._quantityInStock = quantityInStock;
  }
  getProductInfo() {
    return `${this._name} ${this._price} ${this._currency}`;
  }
  byProduct(quantity) {
    if (!Number.isInteger(quantity) || quantity < 0) {
      throw new TypeError("quantity must be an integer and not less than 0");
    }
    if (quantity <= this._quantityInStock) {
      return `Total amount: ${(quantity * this._price).toFixed(2)} ${this._currency}`;
    }
    return `Insufficient quantity in stock. Available ${this._quantityInStock} items for order`;
  }
}
try {
  const product = new Product('milk', 35, "EUR", 13);
//   console.log(product);
//   console.log(product.getProductInfo());
//   console.log(product.byProduct(5));
} catch (error) {
  console.log(error);
}
