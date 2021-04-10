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
      console.log("autenticando ");
      this.router.navigate(['/order/form']);
    }else{
      console.log("el usuario y la contraseña son incorrectos");
    }
    return (request.getName()=="felipe" && request.getPassword()=="123");
  }
}
