import { Injectable } from '@angular/core';
import { Filter } from '../Filter/filter';
import { Order } from '../Order/Order';

@Injectable({
  providedIn: 'root'
})
export class CouponFormFilterService implements Filter{

  constructor() { }

  public execute(request:Order): boolean{
    if(request.getCoupon()){
      console.log("aplicando cupón");
      if(request.getDiscount()!==0){
        request.setTotal(request.getTotal()*(1-(request.getDiscount()/100)));
      }else{
        console.log("falta agregar descuento");
      }
    }
    return (request.getCoupon());
  }
}
