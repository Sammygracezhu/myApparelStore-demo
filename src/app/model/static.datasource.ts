import { Injectable } from "@angular/core";
import { Apparel } from './apparel.model';
import { from, Observable } from 'rxjs';
import { Order } from './order.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable()
export class StaticDataSource{
    private orders: Order[] = [];
    private apparels: Apparel[] = [
        new Apparel(1, "My son's favorite T-Shirt", "boy1_", ["white","black"],"white","Youth", "Man made, limited numbers left, purchase it today.  ", 100),
        new Apparel(2, "My daughter's favorite Skirt", "girls1_",["white","black"],"white", "Youth", "Man made, limited numbers left, purchase it today.  ", 200),
        new Apparel(3, "Lovely T-Shirt",  "toddler_",["white", "black"],"white","Toddler", "Man made, limited numbers left, purchase it today.  ", 100),
        new Apparel(4, "Very pretty Zip Hoodie", "toddler_hood_",["black", "grey"], "black","Toddler", "Man made, limited numbers left, purchase it today.  ", 200),
        new Apparel(5, "Infant' favorite Hoodie",  "infant_hood_",["black", "grey"], "black","Infant", "Man made, limited numbers left, purchase it today.  ", 100),
        new Apparel(6, "Baby's lovely T-Shirt", "infant_hood2_",["white","black", "pink"],"white", "Infant", "Man made, limited numbers left, purchase it today.  ", 200),
    ];

    getApparels():Observable<Apparel[]>{
        return from([this.apparels]);
    }

    saveOrder(order: Order):Observable<Order>{
        order.id = this.orders.length + 1;
        //console.log(JSON.stringify(order));
        this.orders.push(order);
        console.log(JSON.stringify(this.orders));
        return from([order]);
    }
    getOrders(): Observable<Order[]>{
        return from([this.orders]);
    }
}