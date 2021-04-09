import { Injectable } from '@angular/core';
import { Filter } from '../Filter/filter';
import { Order } from '../Order/Order';

@Injectable({
  providedIn: 'root'
})
export class ContactFilterService implements Filter{

  constructor() { }

  public execute(request: Order): boolean{
    console.log("entró al filtro de contacto");
    if(request.getContactNumber().length===9 || request.getContactNumber().length===6){
      localStorage.setItem("contacto",  request.getContactNumber());
      console.log("registrando contacto " + JSON.stringify(request));
    }
    return (request.getContactNumber().length===9 || request.getContactNumber().length===6);
  }
}
