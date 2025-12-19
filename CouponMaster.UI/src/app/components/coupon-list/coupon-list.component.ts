import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon.model';
import { CouponService } from 'src/app/services/coupon.service';

@Component({
  selector: 'app-coupon-list',
  templateUrl: './coupon-list.component.html',
  styleUrls: ['./coupon-list.component.scss']
})
export class CouponListComponent implements OnInit {
  
  coupons: Coupon[] = [];

  // Inject the Service
  constructor(private couponService: CouponService) { }

  ngOnInit(): void {
    this.couponService.getCoupons().subscribe({
      next: (data) => {
        this.coupons = data;
        console.log('Data received:', data); // For debugging
      },
      error: (err) => {
        console.error('Error fetching coupons:', err);
      }
    });
  }
}