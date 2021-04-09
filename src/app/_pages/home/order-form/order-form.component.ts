import { Component, OnInit } from '@angular/core';
import { timeStamp } from 'node:console';
import { Client } from 'src/app/Client/Client';
import { FilterManager } from 'src/app/Filter/FilterManager';
import { Target } from 'src/app/Filter/Target';
import { Order } from 'src/app/Order/Order';
import { ContactFilterService } from 'src/app/_services/contact-filter.service';
import { CouponFormFilterService } from 'src/app/_services/coupon-form-filter.service';
import { DrinkFormFilterService } from 'src/app/_services/drink-form-filter.service';
import { PayFormFilterService } from 'src/app/_services/pay-form-filter.service';


@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  constructor(
    private payFormFilter: PayFormFilterService,
    private contactFilter: ContactFilterService,
    private drinkFilter: DrinkFormFilterService,
    private discountFilter: CouponFormFilterService,
  ) { }

  dishes: any[] = [
    {dishName: "Arroz Chaufa", price: 10.00, image: '../../../../assets/arrozChaufa.jpg', quantity: 0},
    {dishName: "Pollo a la brasa", price: 15.00, image: '../../../../assets/pollobrasa.jpg', quantity: 0},
    {dishName: "Ceviche", price: 12.00, image: '../../../../assets/ceviche.jpg', quantity: 0},
    {dishName: "Ají de gallina", price: 10.00, image: '../../../../assets/ajiGallina.jpg', quantity: 0}
  ];

  pays: any[] = ["efectivo", "tarjeta"];
  selectedPayForm: string;
  cardNumber: string;
  contactNumber: string;

  selectedDishes: Array<any> = new Array<any>();

  filterManager: FilterManager = new FilterManager(new Target());
  client: Client = new Client();
  order: Order = new Order();

  bebida: any[] = [{valor:true, clave: "si"}, {valor:false, clave:"no"}];
  cupon: any[] = [{valor:true, clave: "si"}, {valor:false, clave:"no"}];
  optionDrinkSelected: boolean;
  optionCuponSelected: boolean;
  discount: number = 0;
  ngOnInit(): void {
  }

  agregarCarrito(dish: any){
    dish["quantity"]++;
    this.order.setTotal(this.order.getTotal() + dish.price);
    this.selectedDishes.push(dish);
      this.selectedDishes = this.selectedDishes.filter((item,index)=>{
        return this.selectedDishes.indexOf(item) === index;
      })
  }

  actualizarTotal($event){
    console.log($event);
  }



  public inicialice(): void{
    this.order.setPayForm(this.selectedPayForm);
    this.order.setCardNumber(this.cardNumber);
    this.order.setContactNumber(this.contactNumber);
    this.order.setDrink(this.optionDrinkSelected);
    this.order.setCoupon(this.optionCuponSelected);
    this.order.setDiscount(this.discount);
    this.order.setDish(this.selectedDishes);
    this.filterManager = new FilterManager(new Target());
    this.filterManager.setFilter(this.contactFilter);
    this.filterManager.setFilter(this.payFormFilter);
    this.filterManager.setFilter(this.drinkFilter);
    this.filterManager.setFilter(this.discountFilter);
    this.client.setFilterManager(this.filterManager);
    this.client.sendRequest(this.order);

  }

}
