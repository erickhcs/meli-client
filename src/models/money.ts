type Price = {
  currency: string;
  amount: number;
  decimals: number;
};
export class Money {
  constructor(public price: Price) {
    this.price = price;
  }

  fullPrice() {
    return Number(`${this.price.amount}.${this.price.decimals}`);
  }

  format() {
    const fullPrice = this.fullPrice();

    return new Intl.NumberFormat(navigator.language, {
      style: "currency",
      currency: this.price.currency,
    }).format(fullPrice);
  }
}
