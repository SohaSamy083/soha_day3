import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
//import { Icategory } from '../../models/icategory';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HoverCardDirective } from '../../directives/hover-card.directive';
import { PipeTransformPipe } from '../../pipes/pipe-transform.pipe';
import { CreditPipePipe } from '../../pipes/credit-pipe.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,FormsModule,HoverCardDirective,PipeTransformPipe,CreditPipePipe],

templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnChanges {
  products:Iproduct[];
  filteredProducts: Iproduct[];
@Input() received:number=0;
  egyptianNationalId:string='29909011509345';
  creditCardId:string='0000000000000000';
  //define event
  @Output() onProductBought: EventEmitter<Iproduct>
  constructor(){
    this.products=[
      {id:1,name:"Iphone mobile",img:"https://fakeimg.pl/250x100/",price:30000,quantity:3,categoryID:10},
      {id:2,name:"Samsung mobile",img:"https://fakeimg.pl/250x100/",price:40000,quantity:1,categoryID:10},
      {id:3,name:"hauawi mobile",img:"https://fakeimg.pl/250x100/",price:10000,quantity:2,categoryID:10},
      {id:4,name:"Dell laptop",img:"https://fakeimg.pl/250x100/",price:45000,quantity:3,categoryID:20},
      {id:5,name:"HP laptop",img:"https://fakeimg.pl/250x100/",price:60000,quantity:1,categoryID:20},
      {id:6,name:"apple laptop",img:"https://fakeimg.pl/250x100/",price:65000,quantity:0,categoryID:20},
      {id:7,name:"Lenovo tablet",img:"https://fakeimg.pl/250x100/",price:30000,quantity:2,categoryID:30},
      {id:8,name:"Huawei MatePad",img:"https://fakeimg.pl/250x100/",price:35000,quantity:0,categoryID:30},
      {id:9,name:"Ipad Apple",img:"https://fakeimg.pl/250x100/",price:32000,quantity:4,categoryID:30},
      {id:9,name:"Ipad sumsung",img:"https://fakeimg.pl/250x100/",price:40000,quantity:4,categoryID:30}
    ];
   this.onProductBought=new EventEmitter<Iproduct>();
    this.filteredProducts=this.products;
  }
  ngOnChanges(){
    this.filterProducts()
  }
  buyProduct(product: Iproduct) {
    if (product.quantity > 0) {
      product.quantity--;
    }
    //fire event
    this.onProductBought.emit(product);
  }

  filterProducts(){
    if(this.received==0){
      this.filteredProducts=this.products;
    }else{
      this.filteredProducts=this.products.filter((item)=>item.categoryID==this.received);
    }
  }
}



