import { Component } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart/cart.service';
import { ProductService } from './product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  // products: IProduct[];
  products : any
  filter:string='';

  constructor(
    private cartSvc: CartService,
    private productSvc:ProductService,
    private router:Router,
    private route: ActivatedRoute   // this is how we read a route parameter value and filter accordingly
    ) {}

  ngOnInit() {
    this.productSvc.getProducts().subscribe((products) => {
      this.products = products;
    });
    this.route.queryParams.subscribe((params)=>{
      this.filter = params['filter'] ??'';
    });
  }
  addToCart(product: IProduct){
    this.cartSvc.add(product);
    this.router.navigate(['/cart'])
  }
  getFilteredProducts(){
    return this.filter ===''
    ? this.products  //i want to return the entire list if the filter is an empty string 
    : this.products.filter(
      (product: any) => product.category === this.filter);//otherwise I Want to return filter expresstion , which takes the products array and filters it for products where the Category matches our new property
  }
}