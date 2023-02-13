class Order {
  constructor() {
    this.quantity = 'I\'m number as number' ;
  }

  get finalPrice() {
    const basePrice = this.quantity * this.itemPrice;

    return this.discountPrice(basePrice, this.discountLevel);
  }

  get discountLevel() {
    return this.quantity > 100 ? 2 : 1;
  }

  discountPrice(basePrice, discountLevel) {
    switch(discountLevel) {
      case 1: return basePrice * 0.95;
      case 2: return basePrice * 0.9;
    }
  }
}