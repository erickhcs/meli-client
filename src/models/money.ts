type Price = {
  currency: string;
  amount: number;
};
export class Money {
  constructor(public price: Price) {
    this.price = price;
  }

  format() {
    return new Intl.NumberFormat(navigator.language, {
      style: "currency",
      currency: this.price.currency,
    }).format(this.price.amount);
  }
}
