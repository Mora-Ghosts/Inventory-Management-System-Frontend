

import { StockService } from '../stock-service.service';
import { Stock } from '../stock';
import {FormsModule, NgForm} from '@angular/forms';
import {NgFor, NgIf} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductTypeService} from '../product-type-service.service';
import { ProductType } from '../product-type';

@Component({
  selector: 'app-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css'],
  imports:[FormsModule, NgIf, NgFor]
})
export class AddStockComponent {
  newStock: Stock = {
    stockId: 0,
    productId: 0,
    size: 0,
    timestamp: new Date(),
    count: 0,
    stockPrice: 0
  };

  products: ProductType[] = [];

  constructor(
    private stockService: StockService,
    private productTypeService: ProductTypeService
  ) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productTypeService.getAllProductTypes().subscribe({
      next: (response) => {
        this.products = response;
      },
      error: (err) => {
        console.error('Error fetching product types:', err);
        alert('Failed to fetch product types.');
      }
    });
  }

  onSubmit(form: NgForm): void {
    if(form.valid){
      this.stockService.createStock(this.newStock).subscribe({
        next: (response) => {
          alert('Stock added successfully!');
          console.log('Created stock:', response);
          form.resetForm()
        },
        error: (err) => {
          console.error('Error creating stock:', err);
          alert('Failed to add stock. Please try again.');
        }
      });
    }else {
      console.error('Invalid inputs');
      alert('Invalid inputs');
    }

  }
}
