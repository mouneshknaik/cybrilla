import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-ecart',
  templateUrl: './ecart.component.html',
  styleUrls: ['./ecart.component.scss']
})
export class EcartComponent implements OnInit {
  host: string = 'http://localhost:3000';
  totalDiscount: any;
  TotalCount: any;
  actualTotalDiscount: number;
  constructor(private http: HttpClient) { }
  productList: any;
  cartData: any;
  ngOnInit(): void {
    this.getProductList();
    this.gettotalDiscount();
    this.getCartData();
    // this.getCartData();
  }
  addtoCart(product: string) {
    console.log(product);
    this.appendinCart(product);
  }
  getProductList() {
    this.http.get<any>('/api/productList').subscribe(data => {
      this.productList = data;
    }, (error) => {
      console.log(error);
    });
  }
  appendinCart(product) {
    let productData = { productName: product };
    console.log(productData);
    this.http.post<any>('/api/cartData', productData).subscribe(data => {
      console.log(data);
      if (data.affectedRows) {
        this.getCartData();
      }
    });
  }
  getCartData() {
    this.http.get<any>('/api/getCartData').subscribe(data => {
      this.cartData = data;
      let totalValue=totalCartValue(data,'priceWithUnit');
      if(this.totalDiscount.cartAmount<totalValue){
        this.TotalCount=totalValue-this.totalDiscount.discount;
      }else{
        this.TotalCount=totalValue;
      }
      let actualTotalAmount=totalCartValue(data,'actualPriceWithUnit');
      console.log(actualTotalAmount);
      this.actualTotalDiscount=actualTotalAmount-this.TotalCount;
      console.log(this.TotalCount);
    }, (error) => {
      console.log(error);
    });
  }
  gettotalDiscount() {
    this.http.get<any>('/api/totalDiscount').subscribe(data => {
      this.totalDiscount = data[0];
    }, (error) => {
      console.log(error);
    });
  }
}
function totalCartValue(data,price) {
  return data.reduce(function (acc, obj) { return acc + obj[price]; }, 0);
}
