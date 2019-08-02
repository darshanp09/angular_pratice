import {Injectable} from "@angular/core";
import {IProduct} from "./products";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class ProductService{

  constructor(private http:HttpClient){}

  private _productUrl = "https://ngapi4.herokuapp.com/api/getProducts";

  getProducts():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this._productUrl);
  }
}
