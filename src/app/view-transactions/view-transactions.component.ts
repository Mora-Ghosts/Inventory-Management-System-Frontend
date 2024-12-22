import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { TransactionType } from '../transaction-type';
import { Stock } from '../stock';
import { TransactionService } from '../transaction.service';
import { TransactionTypeService } from '../transaction-type.service';
import { StockService } from '../stock-service.service';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-view-transactions',
  templateUrl: './view-transactions.component.html',
  imports: [
    FormsModule,
    NgForOf,
    NgIf
  ],
  styleUrls: ['./view-transactions.component.css']
})
export class ViewTransactionsComponent implements OnInit {
  transactions: Transaction[] = [];
  transactionTypes: TransactionType[] = [];
  stocks: Stock[] = [];
  editableTransaction: Transaction | null = null;

  constructor(
    private transactionsService: TransactionService,
    private transactionTypeService: TransactionTypeService,
    private stockService: StockService
  ) {}

  ngOnInit(): void {
    this.fetchTransactions();
    this.fetchTransactionTypes();
    this.fetchStocks();
  }

  fetchTransactions(): void {
    this.transactionsService.getAllTransactions().subscribe({
      next: (transactions) => (this.transactions = transactions),
      error: (err) => console.error('Error fetching transactions:', err)
    });
  }

  fetchTransactionTypes(): void {
    this.transactionTypeService.getAllTransactionTypes().subscribe({
      next: (types) => (this.transactionTypes = types),
      error: (err) => console.error('Error fetching transaction types:', err)
    });
  }

  fetchStocks(): void {
    this.stockService.getAllStocks().subscribe({
      next: (stocks) => (this.stocks = stocks),
      error: (err) => console.error('Error fetching stocks:', err)
    });
  }

  editTransaction(transaction: Transaction): void {
    this.editableTransaction = { ...transaction };
  }

  updateTransaction(): void {
    if (this.editableTransaction) {
      this.transactionsService.updateTransaction(this.editableTransaction).subscribe({
        next: () => {
          alert('Transaction updated successfully!');
          this.cancelEdit();
          this.fetchTransactions();
        },
        error: (err) => console.error('Error updating transaction:', err)
      });
    }
  }

  deleteTransaction(tid: number | null): void {
    if (tid && confirm('Are you sure you want to delete this transaction?')) {
      this.transactionsService.deleteTransaction(tid).subscribe({
        next: () => {
          alert('Transaction deleted successfully!');
          this.fetchTransactions();
        },
        error: (err) => console.error('Error deleting transaction:', err)
      });
    }
  }

  cancelEdit(): void {
    this.editableTransaction = null;
  }
}
