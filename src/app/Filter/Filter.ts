import { Order } from "../Order/Order";

export interface Filter{
  execute(request: Order): boolean;

}
