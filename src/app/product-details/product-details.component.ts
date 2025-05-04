import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() product!:IProduct; 
  @Output() buy = new EventEmitter()//this output property is an event, so we give it a name which representative of an event that a child component would raise 
  // That input tells the child component and nay components that utilize this child component that it does have a product member that can receive data from a parent
  //That's all we have to do to send data down into a child component is we use the input decorator on a variable a member of the component itself 
  //in this case the attribute is the product attribute 
  //And then in the HTML of the parent component we add[binding] to that attribute , and then we just give it a value .

  // in this case , we gave product form the ngFor , but we could give it other values if maybe it was a number, we could just put in a literal number like a 3 

  buyButtonClicked(product: IProduct){
    this.buy.emit(); // this is how we trigger the event
  }
  getDiscountedClasses(product:IProduct){
    if(product.discount > 0)
      return ['strikethrough'];
    else return []; // arrays are nice because it's easy to add mroe classes , more elements to the array unlike a space-delimieted string. If we need multiple classes to be inside of this array that we return back,we can build that up and push new elements into the array 
  }
  getImageUrl(product:IProduct){
    return '/assets/images/robot-parts/' + product.imageName;
  }
}
