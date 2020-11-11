import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  template: `<h3> 404 NOT FOUND </h3>`,
  styles: [
    `h3 {font-size: 5rem; font-family: 'Arial', sans-serif; text-align: center; margin-top: 100px;}`
  ]
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
