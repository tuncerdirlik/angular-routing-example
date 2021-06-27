import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { products } from 'src/app/models/products';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = products;

  constructor(
    private router: Router,
    private route: ActivatedRoute        
  ) { }

  ngOnInit() {

    
    // query params
    this.route.queryParamMap.subscribe(params => {
      console.log(params.get("page"));
      console.log(params.get("order"));
    })

    // let page = this.route.snapshot.queryParamMap.get("page");
    // console.log(page);

  }

  loadProducts() {
    
    this.router.navigate(["/products"], {
      queryParams: {
        page: 1
      }
    });

  }

}
