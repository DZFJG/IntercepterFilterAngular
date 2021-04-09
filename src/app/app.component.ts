import { Component } from '@angular/core';
import { Client } from './Client/Client';
import { FilterManager } from './Filter/FilterManager';
import { Target } from './Filter/Target';
import { Order } from './Order/Order';
import { AuthFilterService } from './_services/auth-filter.service';
import { ContactFilterService } from './_services/contact-filter.service';
import { OrderFilterService } from './_services/order-filter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IntercepterFilterPattern';

}
