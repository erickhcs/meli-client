type Price = {
  currency: string;
  amount: number;
};
export class Money {
  constructor(public price: Price) {
    this.price = price;
  }

  format(locale: string) {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: this.price.currency,
    }).format(this.price.amount);
  }
}
