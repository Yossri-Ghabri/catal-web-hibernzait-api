import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CatalogueService} from "../service/catalogue.service";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  public produits: any;
  public size: number = 5;
  public currentPage: number = 0;


  constructor(/*private httpClient: HttpClient*/ private catService: CatalogueService) {
  }

  ngOnInit(): void {

  }

  onGetProducts() {
    this.catService.getProducts(this.currentPage, this.size)
      .subscribe(value => {
        this.produits=value;
      }, error => {
        console.log(error);
      });
    /*    this.httpClient.get("http://localhost:8080/products")
          .subscribe(value => {
            this.produits=value;
          },error => {
            console.log(error);
          })
          97639307*/
  }

  onCherhcer(value: any) {
    console.log(value);
  }
}
