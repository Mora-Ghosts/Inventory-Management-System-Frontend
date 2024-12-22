export interface Transaction {
  tid: number|null;
  transactionTypeId: number;
  stockId: number;
  quantity: number;
  timestamp: Date;
  price: string;
}
