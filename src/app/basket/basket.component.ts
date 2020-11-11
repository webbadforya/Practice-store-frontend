import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/interfaces';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  constructor(
    public productsService: ProductsService
  ) {}
  basket = this.productsService.toBasket
  ngOnInit(): void {
  }
}
