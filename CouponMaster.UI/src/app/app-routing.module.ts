import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouponListComponent } from './components/coupon-list/coupon-list.component';
import { CouponFormComponent } from './components/coupon-form/coupon-form.component';

const routes: Routes = [
  { path: '', component: CouponListComponent }, // Default home page
  { path: 'add', component: CouponFormComponent },
  { path: 'edit/:id', component: CouponFormComponent } // :id is a dynamic parameter
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
