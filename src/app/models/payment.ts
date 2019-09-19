export interface Payment {
  amount: number;
  currencyCode: string;
  destinationAccountNumber: number;
  id ?: string;
  paymentDescription: string;
  sourceAccountNumber: string;
}
