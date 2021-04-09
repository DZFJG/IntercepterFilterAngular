import {FilterChain} from "../Filter/FilterChain";
import {Target} from "../Filter/Target";
import {Filter} from "../Filter/filter";
import { Order } from "../Order/Order";

export class FilterManager{
  private filterChain: FilterChain;

  constructor(target: Target){
    this.filterChain = new FilterChain();
    this.filterChain.setTarget(target);
  }

  public setFilter(filter: Filter): void{
    this.filterChain.addFilter(filter);
  }

  public filterRequest(request: Order): void{
    this.filterChain.execute(request);
  }
}
