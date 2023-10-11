import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
//import { Customer } from './customer.model'; // Adjust the path as needed

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerName: string | undefined;

  constructor(private customerService: CustomerService) {}
  
  ngOnInit() {
    this.customerService.getCustomer().subscribe((data: any) => {
      this.customerName = data.customerName;
    });
  }
}
