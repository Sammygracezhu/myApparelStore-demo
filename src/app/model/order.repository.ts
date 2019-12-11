import { Injectable } from "@angular/core";
import { StaticDataSource } from './static.datasource';
import { Order } from './order.model';
import { Observable } from 'rxjs';

@Injectable()
export class OrderRepository{
    constructor(private dataSource: StaticDataSource){}
    
    getOrders():Observable<Order[]>{
        return this.dataSource.getOrders();
    }

    saveOrder(order: Order): Observable<Order>{
        return this.dataSource.saveOrder(order);
    }
}