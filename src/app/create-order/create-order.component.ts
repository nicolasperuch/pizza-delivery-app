import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FlavorService } from '../service/flavor.service';
import { DataValidatorService } from '../service/data-validator.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  ORDER_URL = 'http://localhost:8080/order'
  customerName = ''
  size = ''
  flavor = ''
  hasStuffedEdge = false;
  flavorList: String[] = [];

  constructor(private flavorService: FlavorService,
              private validatorService: DataValidatorService,
              private http: HttpClient) { }

  ngOnInit() {
    this.getFlavors();
  }

  setCustomerName(event: any) {
    this.customerName = event.target.value;
  }

  setSize(event: any) {
    this.size = event.target.value;
  }
  setFlavor(event: any) {
    this.flavor = event.target.value;
  }
  setHasStuffedEdge(event: any) {
    this.hasStuffedEdge = event.target.value;
  }  

  isInputValid(): boolean {
    return !this.validatorService.isEmpty(this.customerName)
  }

  getFlavors(): void {
    this.flavorService
          .getFlavors()
          .subscribe( flavors =>
            this.flavorList = flavors
          );
  }

  sendRequest(): void{
    if(this.isInputValid()) {
      this.postOrder()
    }
  };

  postOrder(): void {
    this.http.post(this.ORDER_URL, this.buildJson()
    ).subscribe(
      (val) => {
          console.log("POST call successful value returned in body", val);
      },
      response => {
          console.log("POST call in error", response);
      },
      () => {
          console.log("The POST observable is now completed.");
      }
    )
  }

  buildJson(): any{
    return { "customerName": this.customerName,
              "size": this.size,
              "flavor": this.flavor,
              "hasStuffedEdge": this.hasStuffedEdge
    }
  }
}
