import { Order } from "../Order/Order";

export class Target{

  constructor(){

  }

  public execute(request: Order): void{
    console.log("leyendo: " + JSON.stringify(request));
  }
}
