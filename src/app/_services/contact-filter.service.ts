import { Injectable } from '@angular/core';
import { Filter } from '../Filter/filter';
import { Order } from '../Order/Order';

@Injectable({
  providedIn: 'root'
})
export class ContactFilterService implements Filter{

  constructor() { }

  public execute(request: Order): boolean{
    if(request.getContactNumber().length===9 || request.getContactNumber().length===7){
      localStorage.setItem("contacto",  request.getContactNumber());
      console.log("registrando contacto ");
    }else{
      console.log("error al registrar contacto");
    }
    return (request.getContactNumber().length===9 || request.getContactNumber().length===7);
  }
}
