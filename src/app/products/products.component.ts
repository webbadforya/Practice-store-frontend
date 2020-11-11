import { Component, OnInit } from '@angular/core';
import { BasketComponent } from '../basket/basket.component';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor(public productsService: ProductsService
    ) {}
  products = this.productsService.productsRow
  ngOnInit(): void {
  }
  addToBasket(prod){
    console.log(prod)
    if(!this.productsService.toBasket.some(i => i.id === prod.id)){
      this.productsService.toBasket.push(prod);
    }
  }

}
