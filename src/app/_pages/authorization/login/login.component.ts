import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/Client/Client';
import { Filter } from 'src/app/Filter/filter';
import { FilterManager } from 'src/app/Filter/FilterManager';
import { Target } from 'src/app/Filter/Target';
import { Order } from 'src/app/Order/Order';
import { AuthFilterService } from 'src/app/_services/auth-filter.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  hide = true;
  constructor(
    private authFilter: AuthFilterService
  ) { }

  ngOnInit(): void {
  }


  usuario: string;
  password: string;

  filterManager: FilterManager = new FilterManager(new Target());
  client: Client = new Client();
  order: Order = new Order();


  public inicialice(): void{
    this.order.setName(this.usuario);
    this.order.setPassword(this.password);
    this.filterManager.setFilter(this.authFilter);
    //this.filterManager.setFilter(new ContactFilterService());
    //this.filterManager.setFilter(new OrderFilterService());
    this.client.setFilterManager(this.filterManager);
    this.client.sendRequest(this.order);
  }

}
