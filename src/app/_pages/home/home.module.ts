import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderFormComponent } from './order-form/order-form.component';
import { HomeRoutingModule } from "./home-routing.module";
import { MaterialModule } from 'src/app/_material/material.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [OrderFormComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule
  ]
})
export class HomeModule { }
