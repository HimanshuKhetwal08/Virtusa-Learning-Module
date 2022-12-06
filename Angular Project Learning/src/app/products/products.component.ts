import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products = [
    {id:1, name:'Watch', price:'900', color:'Brown', available:'Available', image:'/assets/products/watch.jpg' },
    {id:2, name:'Smart TV', price:'12000', color:'Black', available:'Not Available', image:'/assets/products/tv.jpg' },
    {id:3, name:'Iphone 12', price:'68000', color:'Blue', available:'Available', image:'/assets/products/iphone-12.png' },
    {id:4, name:'Washing Machine', price:'9900', color:'White and Brown', available:'Available', image:'/assets/products/washing-machine.jpg' },
    {id:5, name:'Refrigerator', price:'24000', color:'Grey', available:'Not Available', image:'/assets/products/refrigerator.jpg' },
    {id:6, name:'Laptop', price:'59900', color:'Grey', available:'Not Available', image:'/assets/products/laptop.jpg' }
  ];
}
