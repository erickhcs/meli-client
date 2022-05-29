export class Money {
  public currency: string;
  public amount: number;

  constructor(currency: string, amount: number) {
    this.currency = currency;
    this.amount = amount;
  }

  format() {
    return new Intl.NumberFormat(navigator.language, {
      style: "currency",
      currency: this.currency,
    }).format(this.amount);
  }
}
