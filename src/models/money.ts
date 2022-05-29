export class Money {
  public currency: string;
  public amount: number;
  public decimals: number;

  constructor(currency: string, amount: number, decimals: number) {
    this.currency = currency;
    this.amount = amount;
    this.decimals = decimals;
  }

  number() {
    return Number(`${this.amount}.${this.decimals}`);
  }

  format() {
    return new Intl.NumberFormat(navigator.language, {
      style: "currency",
      currency: this.currency,
    }).format(this.number());
  }
}
