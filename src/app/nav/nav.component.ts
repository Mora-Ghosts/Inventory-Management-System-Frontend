import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink,NgFor],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  navigationLinks = [
    { label: 'Dashboard', path: '' },
    { label: 'Add Categories', path: 'add-catagories' },
    { label: 'Add Product Types', path: 'add-product-types' },
    { label: 'Add Stocks', path: 'add-stocks' },
    { label: 'Add Transactions', path: 'add-transactions' },
    { label: 'View Category Types', path: 'view-category-types' },
    { label: 'View Product Types', path: 'view-product-types' },
    { label: 'View Stocks', path: 'view-stocks' },
    { label: 'View Transactions', path: 'view-transactions' },
  ];


}
