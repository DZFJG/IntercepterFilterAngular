export class Order{
  private name: string;
  private password: string;
  private contactNumber: string;
  private address: string;
  private dish:any[];
  private payForm: string;
  private total: number;
  private cardNumber: string;
  private drink: boolean;
  private coupon: boolean;
  private discount: number;

  constructor(){
    this.name="";
    this.password="";
    this.contactNumber="";
    this.address="";
    this.dish=[];
    this.payForm="";
    this.total=0;
    this.cardNumber="";
    this.drink = false;
    this.coupon = false;
    this.discount = 0;
  }

  public getCoupon(): boolean{
    return this.coupon;
  }

  public setCoupon(coupon: boolean): void{
    this.coupon = coupon;
  }

  public getDiscount(): number{
    return this.discount;
  }

  public setDiscount(discount: number): void{
    this.discount = discount;
  }

  public getDrink(): boolean{
    return this.drink;
  }

  public setDrink(drink: boolean): void{
    this.drink = drink;
  }

  public getCardNumber(): string{
    return this.cardNumber;
  }

  public setCardNumber(cardNumber: string): void{
    this.cardNumber = cardNumber;
  }

  public setTotal(total: number): void{
    this.total = total;
  }

  public getTotal(): number{
    return this.total;
  }


  public getName(): string{
    return this.name;
  }

  public getPassword(): string{
    return this.password;
  }

  public getContactNumber(): string{
    return this.contactNumber;
  }

  public getAddress(): string{
    return this.address;
  }

  public getDish(): any[]{
    return this.dish;
  }

  public getPayForm(): string{
    return this.payForm;
  }

  public setName(name: string): void{
    this.name = name;
  }

  public setPassword(password: string): void{
    this.password = password;
  }

  public setContactNumber(contactNumber: string): void{
    this.contactNumber = contactNumber;
  }

  public setAddress(address: string): void{
    this.address = address;
  }

  public setDish(dish: any[]): void{
    this.dish = dish;
  }

  public setPayForm(payForm: string): void{
    this.payForm = payForm;
  }


}
