import { FilterManager } from "../Filter/FilterManager";
import { Order } from "../Order/Order";

export class Client{
  filterManager: FilterManager;

  constructor(){

  }

  public setFilterManager(filterManager: FilterManager): void{
    this.filterManager = filterManager;
  }

  public sendRequest(request: Order): void{
    this.filterManager.filterRequest(request);
  }
}
