class PhysicalProduct extends Product {
  /**
   * 
   * @param {string} name 
   * @param {number} price 
   * @param {string} currency 
   * @param {number} quantityInStock 
   * @param {string} weight 
   */
  constructor(
    name,
    price,
    currency,
    quantityInStock = QUANTITY_IN_STOCK,
    weight
  ) {
    super(name, price, currency);
    this.quantityInStock = quantityInStock;
    this.weight = weight;
  }
  get weight() {
    return this._weight;
  }
  set weight(weight) {
    if (weight === WEIGHT_KILOGRAM || weight === WEIGHT_GRAM) {
      return (this._weight = weight);
    }
    throw new TypeError("weight must be 'kg' or 'g'");
  }
  get quantityInStock() {
    return this._quantityInStock;
  }
  set quantityInStock(quantityInStock) {
    if (typeof quantityInStock !== "number") {
      throw new TypeError("quantity must be number");
    }
    if (quantityInStock < 0) {
      throw new TypeError("quantity must be an integer and not less than 0");
    }
    this._quantityInStock = quantityInStock;
  }
  getProductInfo() {
    return `${this._name}: ${this._price} ${this._currency}/${this.weight}`;
  }

  byProduct(quantity) {
    if (typeof quantity !== "number") {
      throw new TypeError("quantity must be number");
    }
    if (quantity <= this._quantityInStock) {
      return `Total amount: ${quantity * this._price} ${this._currency}`;
    }
    return `Insufficient quantity in stock. Available ${this._quantityInStock} items for order`;
  }
}

try {
  const product2 = new PhysicalProduct("lemon", 69, "UAH", 15, "kg");
  const product2_2 = new PhysicalProduct("Gold", 2000, "UAH", 100, "g");
//   console.log(product2);
//   console.log(product2.getProductInfo());
//   console.log(product2_2.getProductInfo());
//   console.log(product2.byProduct(1.3));
//   console.log(product2_2.byProduct(15));
} catch (error) {
  console.log(error);
}
