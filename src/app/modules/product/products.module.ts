import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductRoutingModule} from './product-routing.module';
import {ProductsComponent} from '../../products/products.component';
import {DetailsComponent} from "../../products/details/details.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import { NewComponent } from '../../products/new/new.component';


@NgModule({
  declarations: [
    ProductsComponent,
    DetailsComponent,
    NewComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    MatDialogModule
  ]
})
export class ProductModule {
}
