export interface DamageClaim {
  id: number;
  userId: number;
  comment: string;
  insurance: string;
  date: string;
  CreatedAt: string;
  Status: ClaimStatus;
}

export enum ClaimStatus {
  SUBMITTED = 'submitted',
  APPROVED = 'approved',
  REJECTED = 'rejected',
}