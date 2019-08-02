import { Component,OnInit } from '@angular/core';
import {IProduct} from "./products";
import {ProductService} from "./product.service";

@Component({
  selector:'pro-app',
  templateUrl:`./products.component.html`,
  styleUrls:['./products.component.css']
})

export class ProductComponent implements OnInit{
  title="**** Product List ****"
  showImage:boolean=false;
  imgWidth=50;
  filterProduct=""

  constructor( private _productService:ProductService){}
  products:IProduct[]=[]

  ngOnInit():void{
    this._productService.getProducts().subscribe(products=>this.products=products)
  }
  toggleImage():void{
    this.showImage=!this.showImage;
  }
  onRatingClicked(message:string):void{
    this.title="Product List"+message;
  }
}
