import {Filter} from "../Filter/filter";
import {Target} from "../Filter/Target";
import { Order } from "../Order/Order";

export class FilterChain{
  private filters: Array<Filter> = new Array<Filter>();
  private target: Target;

  constructor(){

  }

  public addFilter(filter: Filter): void{
    this.filters.push(filter);
  }

  public execute(request: Order): void{
    /*
    this.filters.forEach(filter=>{
      if(!filter.execute(request)){
        return;
      }
    })*/

    for(let filter of this.filters){
      if(!filter.execute(request)){
        return;
      }
    }

    this.target.execute(request);
  }

  public setTarget(target: Target){
    this.target = target;
  }

}
