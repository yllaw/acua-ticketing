export default class {
  public strikes: number;

  constructor(public phone: string, public name: string, public query: string,
              public ticketId: number) {
    this.strikes = 0;
  }
}
