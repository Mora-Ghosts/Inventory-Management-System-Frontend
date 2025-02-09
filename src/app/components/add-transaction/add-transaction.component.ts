
import { Component, OnInit } from '@angular/core';
import { TransactionType } from '../../interfaces/transaction-type';
import { Transaction } from '../../interfaces/transaction';
import { TransactionTypeService } from '../../services/transaction-type.service';
import { StockService } from '../../services/stock-service.service';
import { TransactionService } from '../../services/transaction.service';
import {FormsModule} from '@angular/forms';
import {NgFor, NgIf} from '@angular/common';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css'],
  imports:[FormsModule, NgFor]
})
export class AddTransactionComponent implements OnInit {
  transaction: Transaction = {
    tid: null,
    transactionTypeId: 0,
    stockId: 0,
    quantity: 0,
    timestamp: new Date(),
    price: '',
  };

  transactionTypes: TransactionType[] = [];
  stocks: any[] = []; // Replace with a Stock model if necessary

  constructor(
    private transactionTypeService: TransactionTypeService,
    private stockService: StockService,
    private transactionsService: TransactionService
  ) {}

  ngOnInit(): void {
    this.fetchTransactionTypes();
    this.fetchStocks();
  }

  fetchTransactionTypes(): void {
    this.transactionTypeService.getAllTransactionTypes().subscribe({
      next: (types) => (this.transactionTypes = types),
      error: (err) => console.error('Error fetching transaction types:', err),
    });
  }

  fetchStocks(): void {
    this.stockService.getAllStocks().subscribe({
      next: (stocks) => (this.stocks = stocks),
      error: (err) => console.error('Error fetching stocks:', err),
    });
  }

  addTransaction(): void {
    this.transactionsService.createTransaction(this.transaction).subscribe({
      next: () => {
        alert('Transaction added successfully!');
        this.transaction = {
          tid: null,
          transactionTypeId: 0,
          stockId: 0,
          quantity: 0,
          timestamp: new Date(),
          price: '',
        };
      },
      error: (err) => console.error('Error adding transaction:', err),
    });
  }
}
