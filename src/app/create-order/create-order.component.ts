import { Component, OnInit } from '@angular/core';
import { FlavorService } from '../service/flavor.service';
import { DataValidatorService } from '../service/data-validator.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  customerName = ''
  size = ''
  flavor = ''
  hasStuffedEdge = false;
  flavorList: String[] = [];

  constructor(private flavorService: FlavorService,
              private validatorService: DataValidatorService) { }

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
  sendRequest(){
    console.log('customer name: ' + this.customerName)
    console.log('Pizza size: ' + this.size)
    console.log('Pizza flavor: ' + this.flavor)
    console.log('Pizza stuffed edge: ' + this.hasStuffedEdge)

    console.log('is input valid? ' + this.isInputValid())
  }

  getFlavors(): void {
    this.flavorService
          .getFlavors()
          .subscribe( flavors =>
            this.flavorList = flavors
          );
  }

  isInputValid(): boolean {
    return this.validatorService.validatorService(this.customerName)
  }

}
