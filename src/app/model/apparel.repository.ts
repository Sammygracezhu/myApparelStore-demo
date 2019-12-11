import { Injectable } from "@angular/core";
import { Apparel } from './apparel.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class ApparelRepository{
    private apparels: Apparel[] = [];
    private categories: string[] = [];
    constructor(private dataSource: StaticDataSource){
        this.dataSource.getApparels().subscribe(data=>{
            this.apparels = data;
            this.categories = data.map(a=>a.category)
              .filter((c, index, array)=>array.indexOf(c) == index).sort();
        });
    }

    getApparels(category: string = null): Apparel[]{
        return this.apparels.filter(a=>category == null || category == a.category);
    }

    getApparel(id: number): Apparel{
        return this.apparels.find(a=>a.id == id);
    }

    getCategories(): string[]{
        return this.categories;
    }
}