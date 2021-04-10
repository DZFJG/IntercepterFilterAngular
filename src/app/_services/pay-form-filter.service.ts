import { Injectable } from '@angular/core';
import { Filter } from '../Filter/filter';
import { Order } from '../Order/Order';

@Injectable({
  providedIn: 'root'
})
export class PayFormFilterService implements Filter{

  constructor() { }

  public execute(request: Order): boolean{
    let isPayForm: boolean;
    if(request.getPayForm() === "tarjeta"){
      if(request.getCardNumber().length!==0){
        request.setTotal(request.getTotal() + 5.00);
        localStorage.setItem("tipo de pago", request.getTotal().toString());
        console.log("registrando tipo de pago por tarjeta");
        isPayForm = true;
      }else{
        console.log("falta numero de tarjeta");
        isPayForm = false;
      }
    }else if(request.getPayForm() === "efectivo"){
      request.setTotal(request.getTotal());
      localStorage.setItem("tipo de pago", request.getTotal().toString());
      console.log("registrando tipo de pago por efectivo");
      isPayForm = true;
    }
    return isPayForm;
  }
}
