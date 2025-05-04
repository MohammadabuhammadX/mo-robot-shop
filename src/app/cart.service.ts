import { Injectable } from '@angular/core'; // in order for a service to participate in the angular ecosystem, we have to mark it as a service , and we do that with @injectable decorator
import { IProduct } from './catalog/product.model';

@Injectable({
  providedIn: 'root'  // that mean this service is available anywhere in our angular application 
})
export class CartService {
  cart:IProduct[]=[];

  constructor() { }

  add(product: IProduct){
    this.cart.push(product);
    console.log(`product ${product.name} added to cart`);
  }
}
