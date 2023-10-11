import { Component } from '@angular/core';
import { AddressValidationService } from '../address-validation.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-address-validation',
  templateUrl: './address-validation.component.html',
  styleUrls: ['./address-validation.component.css'],
})
export class AddressValidationComponent {
  address: string = ''; // Property to store the address input
  validationResults: any; // Property to store validation results
  addresses: { address: string, validationResults: any }[] = [];

  constructor(private addressValidationService: AddressValidationService) {}

  // Function to trigger address validation
  validateAddress() {
    this.addressValidationService.validateAddress(this.address).subscribe(
      (response) => {
        this.addresses.push({ address: this.address, validationResults: response });
        this.address = ''; // Clear the input field
      },
      (error) => {
        console.error(error);
      }
    );
  }
  
}
