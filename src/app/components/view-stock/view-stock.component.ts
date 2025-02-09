import { Component } from '@angular/core';
import {Stock} from '../../interfaces/stock';
import {StockService} from '../../services/stock-service.service';
import {NgForOf, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-view-stock',
  imports: [
    NgForOf,
    FormsModule,
    NgIf
  ],
  templateUrl: './view-stock.component.html',
  styleUrl: './view-stock.component.css'
})
export class ViewStockComponent {
  stocks: Stock[] = [];
  editableStock: Stock | null = null;

  constructor(private stockService: StockService) {}

  ngOnInit(): void {
    this.fetchStocks();
  }

  fetchStocks(): void {
    this.stockService.getAllStocks().subscribe({
      next: (response) => {
        this.stocks = response;
      },
      error: (err) => {
        console.error('Error fetching stocks:', err);
        alert('Failed to fetch stocks.');
      }
    });
  }

  editStock(stock: Stock): void {
    this.editableStock = { ...stock }; // Clone the object to avoid direct mutation
  }

  updateStock(): void {
    if (this.editableStock) {
      this.stockService.updateStock(this.editableStock).subscribe({
        next: (response) => {
          alert('Stock updated successfully!');
          this.cancelEdit();
          this.fetchStocks();
        },
        error: (err) => {
          console.error('Error updating stock:', err);
          alert('Failed to update stock.');
        }
      });
    }
  }

  deleteStock(stockId: number): void {
    if (confirm('Are you sure you want to delete this stock?')) {
      this.stockService.deleteStock(stockId).subscribe({
        next: () => {
          alert('Stock deleted successfully!');
          this.fetchStocks();
        },
        error: (err) => {
          console.error('Error deleting stock:', err);
          alert('Failed to delete stock.');
        }
      });
    }
  }

  cancelEdit(): void {
    this.editableStock = null;
  }
}
