import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
   public productsRow = [{ id: 1, name: "dsada", color: "black", price: 300, isAvailable: true},
   { id: 2, name: "dsadadada", color: "red", price: 500, isAvailable: true},
   { id: 3, name: "vaqdfasd", color: "black", price: 1000, isAvailable: false}
  ];
  public toBasket = [];
}