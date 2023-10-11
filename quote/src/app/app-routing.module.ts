import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuoteComponent } from './quote/quote.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  { path: 'quotes', component: QuoteComponent },
  { path: 'customer', component: CustomerComponent },
  { path: '', redirectTo: '/quotes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
