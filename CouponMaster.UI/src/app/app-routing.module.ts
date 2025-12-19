import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouponListComponent } from './components/coupon-list/coupon-list.component';

const routes: Routes = [
  { path: '', component: CouponListComponent }, // Default home page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
