import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { IntervalObservable } from "rxjs/observable/IntervalObservable";


@Component({
  selector: 'app-pizza-status',
  templateUrl: './pizza-status.component.html',
  styleUrls: ['./pizza-status.component.css']
})
export class PizzaStatusComponent implements OnInit {
  
  BASE_URL = '104.196.223.120:8080'

  PREFIX_STATUS = 'Your pizza is'
  orderId = ''
  status = ''
  

  constructor (private http: HttpClient) { }

  ngOnInit() {
  }

  setOrderId(event: any) {
    this.orderId = event.target.value;
  }

  getStatus(): void{
    IntervalObservable.create(5000)
    .subscribe(() => {
      this.http.get(this.buildUrl(), {responseType: 'json'})
                    .toPromise()
                    .then(data => {
                      console.log(data)
                      this.status = data.toString(); 
                    })
                    .catch(data => {
                      this.status = 'Down'
                    });
    })
  }

  buildUrl(){
    return this.BASE_URL + "/status/" + this.orderId;
  }
}
