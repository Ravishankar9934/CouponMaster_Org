import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coupon } from '../models/coupon.model';

@Injectable({
  providedIn: 'root'
})
export class CouponService {
  // REPLACE 5000 WITH YOUR ACTUAL .NET PORT (Check your terminal)
  private apiUrl = 'http://localhost:5074/api/coupon';

  constructor(private http: HttpClient) { }

  // Returns an Observable (Stream of data)
  getCoupons(): Observable<Coupon[]> {
    return this.http.get<Coupon[]>(this.apiUrl);
  }
}