import { NgModule } from "@angular/core";

import { StaticDataSource } from "./static.datasource";
import { ApparelRepository } from './apparel.repository';
import { Cart } from './cart.model';
import { OrderRepository } from './order.repository';
import { Order } from './order.model';
@NgModule({
    providers: [ApparelRepository, StaticDataSource, Cart,
    Order, OrderRepository]
})
export class ModelModule { }