import { Injectable } from '@angular/core';
import { Filter } from '../Filter/filter';

@Injectable({
  providedIn: 'root'
})
export class OrderFilterService implements Filter{

  constructor() { }

  public execute(): boolean{
    return true;
  }
}
