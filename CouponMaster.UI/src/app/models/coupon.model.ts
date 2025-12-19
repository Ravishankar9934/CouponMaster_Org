export interface Coupon {
  id: number;
  title: string;
  description: string;
  discountAmount: number;
//   status: string; // Matches "Active" or "Inactive" from your C# DTO
  isActive: boolean;
}