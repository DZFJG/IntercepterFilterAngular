import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Filter } from '../Filter/filter';
import { Order } from '../Order/Order';

@Injectable({
  providedIn: 'root'
})
export class AuthFilterService implements Filter{

  constructor(private router: Router) { }

  public execute(request: Order): boolean{
    if(request.getName()=="felipe" && request.getPassword()=="123"){
      console.log("autenticando " + JSON.stringify(request));
      this.router.navigate(['/order/form']);
    }
    return (request.getName()=="felipe" && request.getPassword()=="123");
  }
}
