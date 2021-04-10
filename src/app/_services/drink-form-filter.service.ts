import { Injectable } from '@angular/core';
import { Filter } from '../Filter/filter';
import { Order } from '../Order/Order';

@Injectable({
  providedIn: 'root'
})
export class DrinkFormFilterService implements Filter {

  constructor() { }

  public execute(request:Order): boolean{
    let tieneBebida: boolean;
    if(request.getDrink()===true){
      console.log("lleva bebida");
      request.setTotal(request.getTotal()+5.00);
      tieneBebida = true;
    }else{
      console.log("no lleva bebida");
      tieneBebida = false;
    }
    return true;
  }
}
